var tipuesearch = {"pages": [{'title': 'About', 'text': 'https://github.com/mdecycu/cmsite \n 評分網站與倉儲： \n 2a cad2023 學員網站與倉儲連結 \n ag1網站 \n repo(github) \n', 'tags': '', 'url': 'About.html'}, {'title': '網路設定', 'text': '下載\xa0 2023_fall_w7_cadlab_network_setup.7z \xa0 (密碼kmolab)，必須先放入個人所分配到的 IPv6 位址後(17)， 以管理者身分執行批次檔案， 就能直接完成電腦輔助設計室中電腦的網路連線設定。 \n \n', 'tags': '', 'url': '網路設定.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'w4-w5', 'text': '☑建立Github帳號下的cad2023倉儲、Github Pages。 \n ☑利用 Replit 啟動 Github 帳號下的 cad2023 內容編輯網站，並設法將改版內容推向 Github。 \n ☑利用 Teams中的Excel 取學員Github 帳號(41123108/cad2023)。 \n ☑建立線上考試帳號。 \n ☑選擇Solidworks完成任務一的零組件設計繪圖。 \n ☐將專案一perpetual motion simulator之零組件轉入CoppeliaSim並進行系統模擬設計。 \n 問題： \n \n 【☐：未完成；☑：已完成】 \n', 'tags': '', 'url': 'w4-w5.html'}, {'title': 'w6', 'text': '☑ 利用隨身碟上的批次檔案進行電腦輔助設計室網路環境設定 \n (詳細過程在第一層-2的「網路設定」) \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w8*', 'text': '維護網站的三個方式: \n \n localhost 透過 token, SSH 確定 git push 權限, SSH 設定可透過 Putty 完成 \n Replit 透過 connect 功能連結與 Github 的權限 \n 自架主機 s1511.cycu.org, 透過 SSH 與分配埠號 \n \n 使用 s1511.cycu.org 管理個人與分組網站：如何遠端登入 、 如何取放檔案、 \xa0 如何與 github 帳號彼此信任 、 如何取下 cad2023 、 如何啟動或關閉 cad2023 倉儲 、 如何連結到動態網站 、 如何設定靜態網站 、 如何連動動態網站改版與靜態網頁 、 如何對資料進行保全 以及、 網路連線協定 等相關議題。 \n ls：list 清單、l：LAN區域網路(ls -l常列印?) \n 觀看目前所在的目錄指令：pwd(列出現在所在的工作目錄) \n 登出：exit \n 新建鑰匙綁github： \n \n \n \n 問題：操作第三次就打不開了 \n 解決方式：網路更新ipv6位置 \n \n 第二次重做成功(略詳細解說) \n \n 2.取放檔案：Safety安全 File文件 T傳輸 P協定(put上傳) \n \n cd更換目錄、put放上、get拿下 \n \n', 'tags': '', 'url': 'w8*.html'}, {'title': 'localhost', 'text': '在本地主機（localhost）上維護網站與在實際伺服器上維護網站有些許不同，因為 localhost 通常用於開發和測試。以下是在 localhost 上維護網站的一些建議步驟： \n 1.備份網站： 在進行任何更改之前，定期備份你的網站資料庫和相關檔案。這可確保在出現問題時能快速還原網站。 \n 2.環境配置： 檢查你的本地開發環境是否正確配置，包括伺服器（例如 Apache、Nginx）、資料庫（例如 MySQL、SQLite）、程式語言運行時（例如 PHP、Node.js）等。 \n 3.代碼版本控制： 如果你使用版本控制系統（如 Git），確保你的代碼庫是最新的，並在開發新功能或修復錯誤之前建立分支。 \n 4.更新依賴項： 確保你使用的所有軟體套件和庫都是最新版本。這包括網站的框架、程式庫和其他相依項目。 \n 5.測試： 在 localhost 上進行測試，驗證最新的代碼和依賴項是否能夠正確運作。這包括功能測試、單元測試和性能測試。 \n 6.資料庫管理： 如果你的網站使用資料庫，請確保資料庫結構與最新的代碼相容。執行可能的資料庫遷移（migrations）以更新結構。 \n 7.日誌檢查： 檢查伺服器和應用程式的日誌文件，以尋找錯誤訊息或潛在的問題。這對於追蹤錯誤和改進代碼效能很有幫助。 \n 8.安全性檢查： 驗證你的本地伺服器和應用程式是否有基本的安全性措施，例如防火牆、適當的訪問權限，以及是否使用了最新的安全性更新。 \n 9.瀏覽器測試： 在不同的瀏覽器中測試網站，確保它在各種環境下都能正確顯示和運作。 \n 10.效能優化： 檢查並優化你的代碼，以確保網站在本地主機上運作時具有良好的效能。 \n 11.清理不必要的檔案： 刪除不必要的臨時檔案、日誌和快取，以節省空間和提高效能。 \n 12.版本控制提交： 如果一切正常，將你的更改提交到版本控制系統中，這有助於追蹤代碼的變更歷史。 \n \xa0 \xa0 \xa0#大一所使用的維護網站方式與步驟，真的忘了詳細步驟所以參考ChatGPT。 \n \n', 'tags': '', 'url': 'localhost.html'}, {'title': 'Replit', 'text': '\n', 'tags': '', 'url': 'Replit.html'}, {'title': 's1511', 'text': '\n', 'tags': '', 'url': 's1511.html'}, {'title': '成果', 'text': '', 'tags': '', 'url': '成果.html'}, {'title': '專案一.*Perpetual motion simulator', 'text': 'perpetual motion simulator(循環繞圈運動系統) \n 設計理念：讓鋼球在圓盤孔洞落下後，沿著軌道運動並回到圓盤上，以進行重複循環繞圈運動。 \n 原參考圖： \n \n 立體圖設計(新版)： \n \n \n 立體圖設計(舊版)： \n \n 立體圖影片展示 \n', 'tags': '', 'url': '專案一.*Perpetual motion simulator.html'}, {'title': 'project1', 'text': '', 'tags': '', 'url': 'project1.html'}, {'title': '問題*', 'text': '', 'tags': '', 'url': '問題*.html'}, {'title': 'CoppeliaSim(解決)', 'text': '問題：未導入插件 \n 疑惑：為何其他同學下載後即可直接使用 CoppeliaSim導入模組？ \n 解決方式：詢問ChatGPT得知缺少插件，再研究老師CoppeliaSim說明+自己瞎搞批次檔，就成功了？？？ \n *解決影片(wink)： \n \n \n \n', 'tags': '', 'url': 'CoppeliaSim(解決).html'}, {'title': 'S1511 acp(未解決)', 'text': '看到影片 w8_2a_s1511_part4 卡住，求解。 \n \n \n', 'tags': '', 'url': 'S1511 acp(未解決).html'}, {'title': '心得', 'text': '大一時初次接觸程式，未曾有過相似經驗，每一步皆是新的嘗試，其中含有解決問題、邏輯運用並且是以英文為基礎，即使有所困難，但未來終將會經常接觸，為減少剛開始接觸程式時的無力與挫折感，必須得勇於接觸、主動尋求解決辦法，我相信這反而相較於會寫何種程式更加重要。 \n 建議老師教學時可以稍微關注學生的進度，雖然大部分多數都是學生沒有自學決心以及成果的壓迫力，但是老實說老師腳步真的有點快，相信大多數人都是跟不太上然後漸漸失去方向性，自然也就降低行動力甚至放棄，當然看到這裡老師可會無奈會覺得這不是理由，所以我特別註明我還在掙扎哈哈，老師看到我的真誠了嗎？希望老師別當我謝謝老師！祝老師身體健康 長命百歲。 \n', 'tags': '', 'url': '心得.html'}, {'title': 'Brython', 'text': "https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers \xa0 (整數 int(), 浮點數 float()) \n Strings \xa0 (字串) \n print (Python 內建函式, \xa0 print() \xa0 函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt \xa0 動態頁面超文件). \n practice_html.txt \xa0 動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為 \xa0 class \xa0 後, 在範例導入時透過 \xa0 instance \xa0 引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:['./../cmsimde/static/','./../downloads/py/']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator \xa0 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n Filename: \xa0 .py \xa0 \n \n \n \n Run \xa0 Output \xa0 清除輸出區 清除繪圖區 Reload \n \n \n \n \n \n \n \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n \n \n \n \n \n \n \n \n Filename: \xa0 .py \xa0 \n \n \n \n Run \xa0 Output \xa0 清除輸出區 清除繪圖區 Reload \n \n \n \n \n \n \n \n", 'tags': '', 'url': 'Brython.html'}]};