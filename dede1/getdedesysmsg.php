<?php
/**
 * 获取dede系统提示信息
 *
 * @version        $Id: getdedesysmsg.php 1 11:06 2010年7月13日Z tianya $
 * @package        8html.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.8html.com/usersguide/license.html
 * @link           http://www.8html.com
 */
require_once(dirname(__FILE__).'/config.php');
require_once(DEDEINC.'/dedehttpdown.class.php');
AjaxHead();
$dhd = new DedeHttpDown();
$dhd->OpenUrl('http://www.8html.com/officialinfo.html');
$str = trim($dhd->GetHtml());
$dhd->Close();
if($cfg_soft_lang=='utf-8') $str = gb2utf8($str);
echo $str;
