<script>
import { Heart, ThumbsUp, ThumbsDown, SquareMinus} from 'lucide-vue-next'

export default {
  name: "HowToPlay",
  components: {Heart, ThumbsUp, ThumbsDown, SquareMinus}
}
</script>

<template>
  <div class="howToPlay">
    <h3 :style="{'font-size':'1.5rem'}">Spielprinzip</h3>
    <p class="linebreak">Das Spielprinzip ist einfach:</p>
    <p class="linebreak">Du wählst zu Beginn aus, mit welcher Wahl du dich beschäftigen möchtest und welche Parteien und Aussagen dir angezeigt werden sollen (grün umrandet).</p>
    <p class="linebreak">Dann gehst du oben rechts auf den Button <i><b>Weiter</b></i>.</p>
    <p class="linebreak">Unten siehst du die Parteilogos, oben die Antworten der Parteien zu einer bestimmten Fragen. Deine Aufgabe ist es, die Parteien den Aussagen zuzuordnen. Jede richtige Zuordnung gibt einen Punkt. Sammle so viele Punkte wie möglich! Am Ende des Spiels siehst du deine Punktezahl.</p>
    <p class="linebreak">Wenn dir Antworten besonders gut gefallen, kannst du sie mit einem Herz-Symbol markieren. Am Ende siehst du eine Zusammenfassung, welcher Partei du wie viele Herzen gegeben hast.</p>
    <h3> </h3>
    <div :style="{'font-size':'1.6rem'}">So spielst du:</div>
    <ol :style="{'font-size':'1.6rem'}">
      <li>
        Parteienauswahl:
        <ul  :style="{'font-size':'1.3rem'}">
          <li> Auf der ersten Seite kannst du durch Klicken auswählen, welche Parteien dir angezeigt werden sollen. Ausgewählte sind grün umrandet. </li>
          <li>Klicke dann oben rechts auf <i><b>Weiter</b></i>.</li>
        </ul>
      </li>
      <li>
        Zuordnung der Parteilogos zu den Antworten der Parteien:
        <ul  :style="{'font-size':'1.3rem'}">
          <li>Ziehe die Parteilogos auf die passenden Antworten (nur mit der Maus möglich) oder</li>
          <li>Klicke auf ein Parteilogo und dann auf die entsprechende Aussage (auch am mobilen Gerät möglich)</li>
          <li>Klicke dann unten rechts auf <i><b>Überprüfen</b></i>. Dann wird dir angezeigt, was richtig und was falsch war.</li>
          <li>Am Ende des Spiels siehst du, wie viele Punkte du beim Zuordnen erhalten hast.</li>
        </ul>
      </li>
      <li>
        Antworten liken:
        <ul  :style="{'font-size':'1.3rem'}">
          <li>Wenn dir eine Antwort besonders gut gefällt, liken sie mit dem Herz-Emoji <Heart class="lucidSymbol" color="red"/>.</li>
          <li>Wie viele Likes du den einzelnen Parteien gegeben hast, wird dir bei der Auswertung am Ende angezeigt. Damit bekommst du eine Orientierung, welcher Partei du am ehesten zugeneigt bist.</li>
        </ul>
      </li>
      <li>
        Sonstiges:
        <ul  :style="{'font-size':'1.3rem'}">
          <li>Du musst die Antworten nicht lesen, du kannst sie mit einem Klick auf das Lautsprecher-Symbol vorlesen lassen.</li>
          <li>Du kannst auch Fragen später beantworten, indem du auf „Weiter“ oder „Zurück“ klickst ohne zu Überprüfen.</li>
          <li>Der aktuelle Stand wird gespeichert</li>
          <li>Spielstand zurücksetzen: Kannst du, indem du auf „Spiel neu starten“ oder auf der letzten Seite auf "Nochmal Spielen" klickst.</li>
        </ul>
      </li>
    </ol>
    <div :style="{'font-size':'1.6rem'}">Wir wünschen viel Spaß beim Spielen und gute Informationen!</div>

  </div>
</template>

<style scoped>
.howToPlay{
  text-align: left;
  font-size: 1.3rem;
}
.lucidSymbol{
  height: 1rem;
  width: 1rem;
}
.linebreak{
  margin-bottom: 0rem;
}
</style>