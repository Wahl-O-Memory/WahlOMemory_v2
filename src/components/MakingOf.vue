<script>
import GenericHeader from "@/components/Header/GenericHeader.vue";

export default {
  name: "MakingOf",
  components: {GenericHeader}
}
</script>

<template>
<div>
  <GenericHeader/>
  <div :style="{'font-size':'1.3rem'}" class="makingOf">
    <h2 :style="{'font-size':'1.8rem'}">
      „Wahl-O-Memory“ – Infos zur Entstehung des Spiels
    </h2>
    <div class="makingOfTextBlock">
      Wir von „Arbeit und Leben Thüringen“ beschäftigen uns mit außerschulischer Bildung und führen das Projekt „Deine Vision 2030“ durch. Damit möchten wir junge Menschen in Thüringen motivieren, sich mit Demokratie und Wahlen auseinanderzusetzen. Dazu zählt auch die U18-Wahl, die begleitend zu den „Erwachsenen“-Wahlen stattfindet. Dort können junge Menschen ihrer Stimme Ausdruck verleihen und ihre Meinungen öffentlich machen, in dem sie in einem U18-Wahllokal wählen gehen. Jugendclubs, Schulen und Orte an denen Kinder und Jugendliche zusammenkommen können sich als U18-Wahllokale anmelden. Nähere Infos <a href="https://www.arbeitundleben-thueringen.de/component/content/article/9-projekte/378-u18-wahl-in-thueringen">hier</a>.
    </div>
    <div class="makingOfTextBlock">
      Begleitend zur U18-Wahl stellen wir Materialien, wie dieses Wahl-O-Memory-Spiel, bereit. Die Idee für das Wahl-O-Memory ist im <a href="https://institut-spawnpoint.de/events/game-jam-2024/">GameJam im Juni 2024</a> entstanden . Dort entwickelten junge Teilnehmer:innen die Idee für das Spiel und haben es später programmiert und erstellt. Ein großes Dankeschön an Lasse und Christian!
    </div>
    <div class="makingOfTextBlock">
      Wie ist der Inhalt des Spiels entstanden? Der Deutsche Bundesjugendring, der die U18-Wahl auf Bundesebene koordiniert hat allen Parteien, die zur Wahl antreten Fragen zu Jugendpolitischen Themen geschickt. Die Antworten der Parteien, die bereits im 20. Deutschen Bundestag als Gruppe oder Fraktion vertreten waren und die Parteien, die bei der Sonntagsfrage der Forschungsgruppe Wahlen vom 10.01.2025 über der 5-Prozent-Hürde gelegen hätten, werden im Wahl-O-Memory abgebildet. Die AfD hat bis Redaktionsschluss nicht auf die Fragen geantwortet. Alle Positionen der weiteren Parteien, die geantwortet haben, findet ihr <a href="https://www.u18.org/bundestagswahl/jugendfragen">hier</a>.
    </div>
    <div class="makingOfTextBlock">
      Wir wünschen viel Spaß beim Spielen und gute Informationen!
    </div>
    <div class="makingOfTextBlock">
      Das Projekt wird unterstützt von TMBWK (LJFP: Landesjugendförderplan) und BMFSFJ (KJP: Kinder- und Jugendplan).
    </div>
    <div class="makingOfTextBlock">
      Die Webanwendung „Wahl-O-Memory" sowie alle zugehörigen Inhalte und Materialien werden unter einer Open Educational Resources (OER) Lizenz veröffentlicht. Diese Lizenz erlaubt die freie Nutzung, Anpassung und Verbreitung der Webanwendung und ihrer Inhalte, sofern die <a href="https://github.com/Wahl-O-Memory">ursprüngliche Quelle</a> ordnungsgemäß genannt wird.
    </div>
  </div>

</div>
</template>

<style scoped>
.makingOf{
  padding: 1rem 10%;
}
.makingOfTextBlock{
  margin-top: 1rem;
  text-align: left;
}
</style>