<?php
/**
 * 管理后台顶部
 *
 * @version        $Id: index_top.php 1 8:48 2010年7月13日Z tianya $
 * @package        8html.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.8html.com/usersguide/license.html
 * @link           http://www.8html.com
 */
require(dirname(__FILE__)."/config.php");
if($cuserLogin->adminStyle=='dedecms')
{
    include DedeInclude('templets/index_top1.htm');
}
else
{
    include DedeInclude('templets/index_top2.htm');
}
