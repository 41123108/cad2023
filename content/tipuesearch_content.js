var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite \n', 'tags': '', 'url': 'About.html'}, {'title': '網路設定', 'text': '下載\xa0 2023_fall_w7_cadlab_network_setup.7z \xa0 (密碼kmolab)，必須先放入個人所分配到的 IPv6 位址後(17)， 以管理者身分執行批次檔案， 就能直接完成電腦輔助設計室中電腦的網路連線設定。 \n \n', 'tags': '', 'url': '網路設定.html'}, {'title': 'w6', 'text': '', 'tags': '', 'url': 'w6.html'}, {'title': '評分網站與倉儲', 'text': '2a cad2023 學員網站與倉儲連結 \n ag1網站 \n repo(github) \n \n', 'tags': '', 'url': '評分網站與倉儲.html'}, {'title': 'w8', 'text': '維護網站的三個方式: \n \n localhost 透過 token, SSH 確定 git push 權限, SSH 設定可透過 Putty 完成 \n Replit 透過 connect 功能連結與 Github 的權限 \n 自架主機 s1511.cycu.org, 透過 SSH 與分配埠號 \n \n 使用 s1511.cycu.org 管理個人與分組網站：如何遠端登入 、 如何取放檔案、 \xa0 如何與 github 帳號彼此信任 、 如何取下 cad2023 、 如何啟動或關閉 cad2023 倉儲 、 如何連結到動態網站 、 如何設定靜態網站 、 如何連動動態網站改版與靜態網頁 、 如何對資料進行保全 以及、 網路連線協定 等相關議題。 \n ls：list 清單、l：LAN區域網路(ls -l常列印?) \n 觀看目前所在的目錄指令：pwd(列出現在所在的工作目錄) \n 登出：exit \n 新建鑰匙綁github： \n \n \n \n 問題：操作第三次就打不開了 \n 解決方式：網路更新ipv6位置 \n \n 第二次重做成功(略詳細解說) \n \n 2.取放檔案：Safety安全 File文件 T傳輸 P協定(put上傳) \n \n cd更換目錄、put放上、get拿下 \n \n', 'tags': '', 'url': 'w8.html'}, {'title': '成果', 'text': '', 'tags': '', 'url': '成果.html'}, {'title': '專案一', 'text': '循環繞圈運動系統 \n 設計理念：讓鋼球在圓盤孔洞落下後，沿著軌道運動並回到圓盤上，以進行重複循環繞圈運動。 \n 原參考圖： \n \n 立體圖設計： \n \n 立體圖影片展示 \n', 'tags': '', 'url': '專案一.html'}, {'title': '心得', 'text': '大一時初次接觸程式，未曾有過相似經驗，每一步皆是新的嘗試，其中含有解決問題、邏輯運用並且是以英文為基礎，即使有所困難，但未來終將會經常接觸，為減少剛開始接觸程式時的無力與挫折感，必須得勇於接觸、主動尋求解決辦法，我相信這反而相較於會寫何種程式更加重要。 \n \n', 'tags': '', 'url': '心得.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}]};