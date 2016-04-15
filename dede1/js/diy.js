/**
 * 
 * @version        $Id: diy.js 1 22:28 2010年7月20日Z tianya $
 * @package        8html.Administrator
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.8html.com/usersguide/license.html
 * @link           http://www.8html.com
 */
 
 
function showHide2(objname){
    var obj = $Obj(objname);
    if(obj.style.display != 'block'){ obj.style.display = 'block' }
    else{  obj.style.display = 'none'; }
}