<?php

$file = __DIR__ . '/state.json';

/**
 * Try to read and unserialize file contents.
 * If file doesn't exist, create a new one.
 *
 * @param string $file
 * @return array
 */
function get_file($file)
{
    $data = file_get_contents($file);
    
    if ($data === false) {
        // Default file content - empty JSON object.
        $data = '{}';
        file_put_contents($file, $data);
    }

    $result = json_decode($data, true);

    // Remove and create file again on JSON parse error.
    if($result === null) {
        unlink($file);
        return get_file($file);
    }

    return $result;
}

/**
 * Update file contents.
 *
 * @param string $file
 * @param array $data
 * @return void
 */
function set_file($file, $data)
{
    file_put_contents($file, json_encode($data));
}

switch (strtolower($_SERVER['REQUEST_METHOD'])) {
    case 'get': {
        print(
            json_encode(
                get_file($file)
            )
        );

        break;
    }
    case 'post': {
        header('Content-Type: application/x-www-form-urlencoded');
        
        $data = array_merge(
            get_file($file),
            json_decode(file_get_contents('php://input'), true)
        );

        set_file($file, $data);
        
        print(
            json_encode(
                $data
            )
        );

        break;
    }
    default: {
        http_response_code(405); // Method not allowed
    }
}
