<template>
  <b-container>
    <h1 class="my-2">
      <router-link to="/">政大 Life Hack</router-link>
      「住宿」篇
    </h1>
    <b-breadcrumb
      class="my-2"
      :items="[
        { text: '首頁', to: { name: 'Home' } },
        { text: '住宿', to: { name: 'dorm' }, active: true }
      ]"
    ></b-breadcrumb>

    <b-row>
      <b-col class="text-left">
        <h2 class="text-center">宿舍</h2>
        <ul>
          <li>
            宿舍優點：
            <ul>
              <li>價格便宜</li>
              <li>進出的人單純</li>
            </ul>
          </li>
          <li>
            宿舍缺點：
            <ul>
              <li>
                在山上，生活機能不便，自強六舍環境個人覺得不太好，隔音也有點差。
              </li>
              <li>若是多人一起住較無私人空間</li>
              <li>房間相近關門聲大</li>
              <li>需共用衛浴，較介意的人須注意</li>
            </ul>
          </li>
        </ul>
      </b-col>
      <b-col class="text-left">
        <h2 class="text-center">外宿</h2>
        <ul>
          <li>校外租屋會遇到的問題</li>
          <li>
            房東
            <ul>
              <li>
                房東的素質令人擔心，若是不小心遇到惡房東更是可怕，再加上租金有高有低，一樣的設備可能差了兩，三千。
              </li>
              <li>高有低，一樣的設備可能差了兩，三千。</li>
              <li>
                Ａ：租屋之前應該實地去看房，和房東多多交涉，設備什麼的或許有討論的空間，這段時間也可以多了解房東。
              </li>
              <li>
                房客的品質也很重要若是不慎遇到怪人，那也麻煩，要如何找到交通方便，租金合理需要長時間、多方面的打聽。
              </li>
            </ul>
          </li>
          <li>
            Ａ：非常在意其他租客會不會對自己造成負面影響的話，獨立套房通常會是好選擇，而交通、租金則依賴自己比投入對租屋資訊的努力，多多比對各個網站的租屋資訊，還可以上網搜尋所在區域有沒有臉書社團等等，通常在社團裡的租屋商品會較便宜。
            <ul>
              <li>
                如果真的萬中選一是自己遇到不誠實房東，而且有租約問題的時候，該找誰或去哪尋求幫助。
              </li>
              <li>
                Ａ：<a
                  href="https://www.laf.org.tw/index.php?action=apply&amp;cid=183"
                  >財團法人法扶會</a
                >
                <a
                  href="https://sec.gov.taipei/News_Content.aspx?n=224402C613AE51F3&amp;s=CDC8074EB15F03CB"
                  >台北市政府秘書處</a
                >等等都有提供免費的法律諮詢，上網搜尋法律諮詢也可以找到很多提供相關服務的法律事務所，自己無法處理的話也可以請父母協助。
              </li>
            </ul>
          </li>
          <li>
            合租
            <ul>
              <li>
                如果找人合租，會面臨到到最後本來找好的室友因為各種原因陸續退出的問題。
              </li>
              <li>
                詢問房東上下左右的鄰居的狀況時，大部分房東都會說他們是好人不會吵，但難保沒有突發意外。
              </li>
            </ul>
          </li>
          <li>
            環境
            <ul>
              <li>
                入住之前不清楚屋況，像文山區就很濕，尤其靠山，進來才知道會有一種叫衣蛾的專門出沒在潮濕房子裡的蟲。衣服晾不乾，住進來才發現房子是表面整潔實際上很髒。
              </li>
              <li>
                學區租房很常遇到包租公把整層樓打通，用木板隔出一間間像旅館那樣的小房間，住宿品質極差。
              </li>
              <li>走廊都暗暗髒髒得又男女混，安全疑慮很高。</li>
              <li>※建議：在租屋前一定要看過環境！</li>
            </ul>
          </li>
          <li>
            總結
            <ul>
              <li>看屋馬拉松很折磨心志，看到最後會很崩潰很想放棄。</li>
              <li>※建議：決定要外宿的同學一定要提早看房！</li>
            </ul>
          </li>
          <li>
            政大附近租屋狀況
            <ul>
              <li>詳情請見租屋地圖(放連結)</li>
            </ul>
          </li>
          <li>
            如何尋找租屋資訊
            <ul>
              <li>
                <a
                  href="https://rent.591.com.tw/?kind=0&amp;region=1&amp;school=401"
                  >591租屋網</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/groups/NCCU.zuker/"
                  >NCCU政大租客</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/groups/681569211878828/"
                  >NCCU政大住屋版</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/groups/NCCUSTUDENT/"
                  >NCCU政大學生交流版</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style></style>
