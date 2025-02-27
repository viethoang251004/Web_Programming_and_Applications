<?php
$n1 = '';
$n2 = '';
$operator = '';
$error = '';
$result = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['num1'])) {
        $n1 = $_POST['num1'];
    }
    if (isset($_POST['num2'])) {
        $n2 = $_POST['num2'];
    }
    if (isset($_POST['operator'])) {
        $operator = $_POST['operator'];
    }

    if ($n1 == '') {
        $error = 'Please enter number 1';
    } else if ($n2 == '') {
        $error = 'Please enter number 2';
    } else {
        switch ($operator) {
            case '+':
                $sum = intval($n1) + intval($n2);
                $result = "$n1 $operator $n2 = $sum";
                break;
            case '-':
                $sub = intval($n1) - intval($n2);
                $result = "$n1 $operator $n2 = $sub";
                break;
            case '*':
                $mul = intval($n1) * intval($n2);
                $result = "$n1 $operator $n2 = $mul";
                break;
            case '/':
                if (intval($n2) != 0) {
                    $div = intval($n1) / intval($n2);
                    $result = "$n1 $operator $n2 = $div";
                } else {
                    $error = 'Cannot divide by zero';
                }
                break;
            default:
                $error = 'Invalid operator';
                break;
        }
    }
}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <title>PHP Exercises</title>
</head>
<body>
    
    <div class="container">

        <div class="row">
            <div class="col-md-6 my-5 mx-auto border rounded px-3 py-3">
                <h4 class="text-center">Tính toán cơ bản</h4>
                <form method="POST">
                    <div class="form-group">
                        <label for="num1">Số hạng 1</label>
                        <input value="<?= $n1 ?>" type="number" class="form-control" id="num1" name="num1">
                    </div>
                    <div class="form-group">
                        <label for="num2">Số hạng 2</label>
                        <input value="<?= $n2 ?>" type="number" class="form-control" id="num2" name="num2">
                    </div>
                    <div class="form-group">
                        <div class="custom-control custom-radio custom-control-inline">
                        <input id="add" type="radio" class="custom-control-input" name="operator" value="+"<?php if ($operator == '+') echo 'checked'; ?>>
                            <label for="add" class="custom-control-label">Cộng</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                        <input id="subtract" type="radio" class="custom-control-input" name="operator" value="-"<?php if ($operator == '-') echo 'checked'; ?>>
                            <label for="subtract" class="custom-control-label">Trừ</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                        <input id="multiply" type="radio" class="custom-control-input" name="operator" value="*"<?php if ($operator == '*') echo 'checked'; ?>>
                            <label for="multiply" class="custom-control-label">Nhân</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                        <input id="divide" type="radio" class="custom-control-input" name="operator" value="/"<?php if ($operator == '/') echo 'checked'; ?>>
                            <label for="divide" class="custom-control-label">Chia</label>
                        </div>
                    </div>
                    <button class="btn btn-success">Xem kết quả</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 mx-auto px-3 py-3 text-center">
                <?php
                    if (!empty($error)) {
                        echo "<div class='alert alert-danger'>$error</div>";
                    } else {
                        if (!empty($result)) {
                            echo "<div class='alert alert-success'>$result</div>";
                        }
                    }
                ?>
            </div>
        </div>
    </div>
</body>
</html>