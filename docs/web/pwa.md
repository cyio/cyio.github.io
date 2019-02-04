# PWA

## ios 12 支持情况
 still force reload every time app is shown/hidden
 now retain cookies after being reloaded (i.e. login possible)
 forget deep links
 support localStorage
 don't support sessionStorage

 解决：
Switched to localStorage instead of sessionStorage when "standalone" and persist a custom history stack to restore deep links 
