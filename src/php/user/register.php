<?php
    header("Content-type:text/html;charset=utf-8");
    $a['meta']=array("code"=>0,"message"=>"");
    //取出传来的数据
    $i=0;
    $postData = file_get_contents('php://input');
    $postStr = json_decode($postData,true);
    $username = $postStr['account'];
    $password = $postStr['pwd'];
    $repassword = $postStr['repwd'];
    $addTime = date("Y-m-d H:i:s",time());
    if(!$username){
    $a['meta']['code']=1;
    $a['meta']['message']='用户名为空';
    echo json_encode($a);
    exit;
    }
    if(!$password){
    $a['meta']['code']=1;
    $a['meta']['message']='密码为空';
    echo json_encode($a);
    exit;
    }
    if($password!==$repassword){
    $a['meta']['code']=1;
    $a['meta']['message']='二次密码不统一';
    echo json_encode($a);
    exit;
    }

    //1连接数据库
    $link =mysql_connect('localhost','root','123456');//连接成功返回对象
    //2连接是否成功
    if(!$link){
    echo "连接失败";
    exit;
    }
    //3设置字符集
    mysql_set_charset('utf8');

    //4选择数据库
    mysql_select_db('mapg');

    //5准备数据库语句
    $sql = "Select * From manager_account WHERE account ='{$username}' ";

    //6发送sql语句
    $res = mysql_query($sql);
    //7处理结果集
   //$row = mysql_fetch_assoc($res);//调用几次该函数 就返回第几行数据。
    $row = mysql_fetch_assoc($res);
    if($row){
        $a['meta']['code']=7;
        $a['meta']['message']='用户名已存在';
        echo json_encode($a);
        exit;
    }
    //加密
    $str = md5(md5(md5($password).'xxx').'yyy');
    //5准备数据库语句
    $sql2 = "Insert INTO manager_account(id,account,password,creaTime) VALUES('1','{$username}','{$str}','{$addTime}')";
    $res2 = mysql_query($sql2);

    if(!$res2){
        $a['meta']['code']=7;
        $a['meta']['message']='注册失败';
        echo json_encode($a);
        exit;
    }eLse{
        $a['meta']['message']='注册成功';
        $a['meta']['code']='200';
        $a['data']=$postStr;
        $a['data']['token']=md5(md5("$username$password"));
        echo json_encode($a);
    }
    $i=$i+1;
    //8关闭数据库
    mysql_close($link);
?>