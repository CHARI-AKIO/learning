<template>
  <div>
    授業一覧
    <table>
      <tr>
        <th class="pa-2" width="200">月曜日</th>
        <th class="pa-2" width="200">火曜日</th>
        <th class="pa-2" width="200">水曜日</th>
        <th class="pa-2" width="200">木曜日</th>
        <th class="pa-2" width="200">金曜日</th>
      </tr>
      <tr>
        <td class="pa-3" width="200"><v-card @click="">テクニカルスキル</v-card></td>
        <td class="pa-3" width="200"><v-card class="pa-2" to="/ClassNote/uml/">アプリケーション開発(UML)</v-card></td>
        <td class="pa-3" width="200">テクニカルスキルII</td>
        <td class="pa-3" width="200">Webアプリケーション</td>
        <td class="pa-3" width="200">プログラミング技法III</td>
      </tr>
      <tr>
        <td class="pa-3" width="200">プロジェクト管理</td>
        <td class="pa-3" width="200">データベース管理</td>
        <td class="pa-3" width="200">テクニカルスキル</td>
        <td class="pa-3" width="200">Webアプリケーション</td>
        <td class="pa-3" width="200">アプリケーション開発技法</td>
      </tr>
      <tr>
        <td class="pa-3" width="200">キャリアガイダンス</td>
        <td class="pa-3" width="200">プログラミング技法III</td>
        <td class="pa-3" width="200">プログラミング技法</td>
        <td class="pa-3" width="200">情報セキュリティ</td>
        <td class="pa-3" width="200">(ゼミ)</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "/"
}
</script>

<style scoped>

</style>
