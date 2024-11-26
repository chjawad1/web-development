<?php
$rows = 6;

echo "<pre>"; 
for ($i = 1; $i <= $rows; $i++) {
    
    for ($j = $rows; $j > $i; $j--) {
        echo "  ";
    }

  
    $value = 1;
    for ($j = 1; $j <= $i; $j++) {
        echo $value . " ";
        $value *= 2; 
    }


    $value /= 4; 
    for ($j = 1; $j < $i; $j++) {
        echo $value . " ";
        $value /= 2; 
    }

    echo "\n"; 
}
echo "</pre>";
?>
