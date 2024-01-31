<html>
<body>
<?php $a = $_POST["uname"]; ?><br>
<?php $b = $_POST["file"];?><br>
<?php $output = shell_exec("/disk1/web/www/html/ping.sh $a $b");?> <br>
<?php echo "<pre><td class='title'><font color='green' size='5'><b>$output</b></a></td></pre>"; ?>
</body>
</html>