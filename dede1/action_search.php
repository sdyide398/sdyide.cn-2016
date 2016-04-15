<?php
/**
 * 检索操作
 *
 * @version        $Id: action_search.php 1 8:26 2010年7月12日Z tianya $
 * @package        8html.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.8html.com/usersguide/license.html
 * @link           http://www.8html.com
 */
require_once(dirname(__FILE__)."/config.php");
require_once(dirname(__FILE__)."/actionsearch_class.php");

//增加权限检查
if(empty($dopost)) $dopost = "";

$keyword=empty($keyword)? "" : $keyword;
$actsearch = new ActionSearch($keyword);
$asresult = $actsearch->Search();
include DedeInclude('templets/action_search.htm');
