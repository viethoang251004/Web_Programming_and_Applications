<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style> table { border-collapse: collapse; width: 80%; margin: 0 auto; } 
            th, td { border: 1px solid black; padding: 8px; text-align: centee; } 
            th { background-color: #f2f2f2; font-weight: bold; } 
            tr:nth-child(even) { background-color: #f2f2f2; } 
    </style>
  </head>
  <body>
  <h1 style="text-align: center; background-color: #f2f2f2;">BẢNG CỬU CHƯƠNG</h1>
    <table border="1" width="80%" style="border-collapse: collapse; margin: auto">
      <?php
        for ($i = 1; $i <= 10; $i++)
        {
            echo "<tr>";
            for ($j = 1; $j <= 10; $j++){
                $c = $i * $j;
                echo"<td>$j x $i = $c</td>";
            }
            echo "</tr>";
        } 
        ?>
    </table>
  </body>
</html>
