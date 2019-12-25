---
title: About
layout: Page
---

  <div style="text-align:center;color:#fff;margin-bottom:15px;">
    書いてる人
  </div>
  <div style="text-align:center">
    <img src="/images/prf.jpg" width="200" style="border-radius:100%">
  </div>
  <div style="text-align:center;color:#fff">
  竜馬(g_empr)
  </div>
<br>

雑多に書き連ねます。

あんまり使ってないけど[Twitter](https://twitter.com/g_empr)とかもやってます。

<br>

### ゲーム系アカウント
<div class="prfBox">
  <div class="prfItem">
  <a href="https://discord.gg/DHFHmsk" target="_blank"><img src="/images/posts/dis.png" height="120"></a>
  <textarea class="ac">getter.io#9390</textarea>
  </div>
  <div class="prfItem">
  <a href="https://www.blizzard.com/ja-jp/" target="_blank"><img src="/images/posts/bli.png" height="120"></a>
  <textarea class="ac">getter#1341</textarea>
  </div>
  <div class="prfItem">
  <a href="https://steamcommunity.com/id/g_empr/" target="_blank"><img src="/images/posts/st.png" height="120"></a>
  <textarea class="ac">g_empr</textarea>
  </div>
  <div class="prfItem">
  <a href="https://www.jp.playstation.com/psn/" target="_blank"><img src="/images/posts/ps.png" height="120"></a>
  <textarea class="ac">getterrobo2</textarea>
  </div>
  <div class="prfItem">
  <a href="https://www.nintendo.co.jp/hardware/switch/" target="_blank"><img src="/images/posts/ns.jpg" height="120"></a>
  <textarea class="ac">SW-5741-7158-6995</textarea>
  </div>
</div>
<script>
  const clip = document.querySelectorAll(".ac");
  for (let i = 0; i < clip.length; i++) {
    clip[i].addEventListener("click", function(){
      let txt = clip[i];
      txt.select();
      document.execCommand("copy");
      console.log("copied");
    })
  }
</script>