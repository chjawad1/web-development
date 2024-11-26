<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prime Number Sum</title>
</head>
<body>
    <h1>Sum of Prime Numbers</h1>
    <?php
    function isPrime($num) {
        if ($num <= 1) {
            return false;
        }
        for ($i = 2; $i <= sqrt($num); $i++) {
            if ($num % $i == 0) {
                return false;
            }
        }
        return true;
    }

    function sumOfPrimes($array) {
        $sum = 0;
        foreach ($array as $num) {
            if (isPrime($num)) {
                $sum += $num;
            }
        }
        return $sum;
    }

    $numbers = [2, 3, 4, 7, 8, 9, 10, 11];
    echo "<p>Sum of prime numbers: " . sumOfPrimes($numbers) . "</p>";
    ?>
</body>
</html>
