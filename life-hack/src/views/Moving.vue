<template>
  <b-container>
    <b-breadcrumb
      class="my-2"
      :items="[
        { text: '首頁', to: { name: 'Home' } },
        { text: '交通', to: { name: 'Move' }, active: true }
      ]"
    ></b-breadcrumb>
    <h2 class="my-2">自有交通工具</h2>
    <b-row class="text-left">
      <b-col>
        <ul>
          <li>
            哪裡會被拖吊
            <ul>
              <li>莊外門口小巷子兩旁</li>
              <li>大門口的郵局人行道</li>
            </ul>
          </li>
          <li>
            哪裡有停車場
            <ul>
              <li>木新路沿路都是車位</li>
              <li>河堤也有車位（堤外停車場）</li>
              <li>萬興國小地下室</li>
              <li>恆光街警察局旁</li>
              <li>新光路前段到中段</li>
              <li>郵局旁邊（山上跟沒有山下宿舍的任可以申請）</li>
              <li>校外郵局對面有停車場</li>
              <li>達賢對面莊外停車場</li>
              <li>下道南橋往右回轉進河堤</li>
              <li>蔣公銅像停車場</li>
              <li>可以停到木柵站下面有一個很棒的停車場</li>
              <li>藝文中心至後山校區環山二道及環山三道停車場（需停車證）</li>
            </ul>
          </li>
          <li>
            停車費
            <ul>
              <li>（學生）每學年2,000元，下學期申請減半收費</li>
              <li>
                （校友）憑校友證進入校區應換取臨時停車卡，收費方式比照臨時計時停車收費方法給予5折優惠停車。
              </li>
              <li>
                <p>
                  （臨停）校外來賓洽公訪客須換取「臨時計時停車卡」進出校區，第一個小時未滿三十分鐘收費新台幣20元，超過三十分鐘至一小時收費新台幣40元，第二個小時起每三十分鐘收費新台幣30元，之後未滿三十分鐘，以三十分鐘計，並限停C、D區。
                </p>
                <p>
                  補充資料：學生辦理汽（機）車停車證，申請時應檢附本人之駕駛執照，行車執照及學生證（新生請連同學雜費繳費證明）至駐警隊辦理，使用父母或配偶車輛者，應檢附申請人之國民身份證及父母或配偶行車執照核驗，驗畢發還。『行照登記公司行號不得申請。』
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <p>後門開車進來好像不用付錢</p>
      </b-col>
    </b-row>

    <h2 class="my-2">使用大眾運輸</h2>
    <b-row>
      <b-col>
        <div class="accordion" role="tablist">
          <b-card
            no-body
            class="mb-1"
            v-for="(poi, index) in Object.keys(moveData)"
            :key="index"
          >
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle="'accordion-' + index" variant="info">
                {{ poi }}
              </b-button>
            </b-card-header>
            <b-collapse
              :id="'accordion-' + index"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text class="text-left">
                  <ul
                    v-for="(type, index) in Object.keys(moveData[poi])"
                    :key="index"
                  >
                    <li>
                      {{ type }} :
                      <ul>
                        <template v-if="Array.isArray(moveData[poi][type])">
                          <li
                            v-for="(way, index) in moveData[poi][type]"
                            :key="index"
                          >
                            {{ way }}
                          </li>
                        </template>
                        <template v-else>
                          <li>{{ moveData[poi][type] }}</li>
                        </template>
                      </ul>
                    </li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      moveData: require("../data/move.json")
    };
  }
};
</script>

<style></style>
