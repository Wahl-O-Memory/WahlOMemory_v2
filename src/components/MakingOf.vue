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
      Wir von „Arbeit und Leben Thüringen“ beschäftigen uns mit außerschulischer Bildung und führen das Projekt „Deine Vision 2030“ durch. Damit möchten wir junge Menschen in Thüringen motivieren, sich mit Demokratie und Wahlen auseinanderzusetzen. Dazu zählt auch die U18-Wahl im Sommer 2024, die begleitend zur Landtagswahl stattfindet. Dort können junge Menschen ihre Stimme abgeben und ihre Meinungen öffentlich machen. Jugendclubs oder Schulen in ganz Thüringen bieten die U18-Wahl vom 19. bis 24. August an. Nähere Infos <a href="https://www.arbeitundleben-thueringen.de/component/content/article/9-projekte/378-u18-wahl-in-thueringen">hier</a>.
    </div>
    <div class="makingOfTextBlock">
      Begleitend zur U18-Wahl stellen wir Materialien, wie dieses Wahl-O-Memory-Spiel, bereit. Die Idee für das Wahl-O-Memory ist im <a href="https://institut-spawnpoint.de/events/game-jam-2024/">GameJam im Juni 2024</a> entstanden . Dort entwickelten junge Teilnehmer:innen die Idee für das Spiel und haben es später programmiert und erstellt. Ein großes Dankeschön an Lasse und Christian!
    </div>
    <div class="makingOfTextBlock">
      Wie ist der Inhalt des Spiels entstanden? In Online-Umfragen und Workshops sammelten wir Fragen von jungen Menschen an die Politik in Thüringen. Diese schickten wir an die 15 Parteien, die zur Landtagswahl antreten. Einige Parteien antworteten pünktlich, andere zu spät oder gar nicht. Aus diesem Grund fehlen hier die Antworten von den Parteien BSW, Bündnis für Deutschland, FDP, Freie Wähler, Piraten und „Tierschutz hier“. Die Parteien waren aufgefordert, sich gut verständlich und kurz (max. 350 Zeichen) zu den Thesen zu positionieren. Auch ob sie sich stark, mittel oder nicht für ein Thema einsetzen (zu sehen an den Icons „Daumen hoch/Daumen runter), konnten sie selbst angeben. Wir haben die Antworten nicht verändert. Lediglich wenn die Parteien in den Antworten ihren Namen benannten, haben wir aus Spielgründen den Namen der Partei durch „Unsere Partei…“ ersetzt.
    </div>
    <div class="makingOfTextBlock">
      Wir wünschen viel Spaß beim Spielen und gute Informationen!
    </div>
    <div class="makingOfTextBlock">
      Das Projekt wird unterstützt von TMBJS (LJFP: Landesjugendförderplan) und BMFSFJ (KJP: Kinder- und Jugendplan).
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