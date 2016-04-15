<?php
/**
 * 栏目管理
 *
 * @version        $Id: catalog_main.php 1 14:31 2010年7月12日Z tianya $
 * @package        8html.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.8html.com/usersguide/license.html
 * @link           http://www.8html.com
 */
require_once(dirname(__FILE__)."/config.php");
require_once(DEDEINC."/typeunit.class.admin.php");
$userChannel = $cuserLogin->getUserChannel();
include DedeInclude('templets/catalog_main.htm');