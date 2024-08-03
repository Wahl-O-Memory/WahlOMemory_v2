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
    Das Spielprinzip ist einfach. Du wählst zu Beginn aus, mit welcher Wahl du dich beschäftigen möchtest (Thüringen U18 2024) und welche Parteien und Aussagen dir angezeigt werden sollen (Alle, Aktuell im Landtag, Keine). Dann gehst du auf den Button weiter. Unten siehst du die Parteilogos, oben die Antworten der Parteien zu einer bestimmten Frage. Deine Aufgabe ist es, die Parteien den Aussagen zuzuordnen. Jede richtige Zuordnung gibt einen Punkt. Sammle so viele Punkte wie möglich! Am Ende des Spiels siehst du deine Punktezahl.    Außerdem kannst du Antworten mit einen Herz-Symbol markieren. Je mehr Herzen am Ende für eine Partei gesammelt sind, umso näher steht dir die Partei.
    <h3> </h3>
    <div :style="{'font-size':'1.3rem'}">So spielst du:</div>
    <ol :style="{'font-size':'1.3rem'}">
      <li>
        Parteienauswahl:
        <ul  :style="{'font-size':'1rem'}">
          <li>Auf der ersten Seite kannst du auswählen, welche Parteien dir angezeigt werden sollen.</li>
          <li>Wähle die Parteien deren Aussagen die du angezeigt bekommen möchtest und klicke oben rechts auf „Weiter“.</li>
          <li>Die Parteien die zur Wahl stehen aber hier nicht aufgeführt sind haben die Fragen nicht beantwortet.</li>
        </ul>
      </li>
      <li>
        Parteienbeschreibung:
        <ul  :style="{'font-size':'1rem'}">
          <li>Auf dieser Seite ist zuzuordnen, welche Beschreibung zu welcher Partei passt. Diese wurden uns von den Parteien so zugesendet. </li>
        </ul>
      </li>
      <li>
        Zuordnung der Parteilogos zu den Antworten der Parteien:
        <ul  :style="{'font-size':'1rem'}">
          <li>Ziehe die Parteilogos auf die passenden Antworten (nur mit der Maus möglich) oder</li>
          <li>Klicke auf ein Parteilogo und dann auf die entsprechende Aussage.</li>
          <li>Klicke dann unten rechts auf „Überprüfen“. Dann wird dir angezeigt, was richtig und was falsch war.</li>
          <li>Am Ende des Spiels siehst du, wie viele Punkte du beim Zuordnen erhalten hast.</li>
        </ul>
      </li>
      <li>
        Positionierung der Parteien:
        <ul  :style="{'font-size':'1rem'}">
          <li>Die Icons über den Aussagen der Parteien zeigen die Position der Parteien zum Thema an, bzw. ob sie sich für das Thema Stark <ThumbsUp class="lucidSymbol" color="black" fill="green"/>, Mittl <SquareMinus class="lucidSymbol" color="black" fill="yellow"/> oder nicht <ThumbsUp class="lucidSymbol" color="black" fill="red"/> einsetzen werden.</li>
        </ul>
      </li>
      <li>
        Antworten liken:
        <ul  :style="{'font-size':'1rem'}">
          <li>Wenn dir eine Antwort besonders gut gefällt, liken sie mit dem Herz-Emoji <Heart class="lucidSymbol" color="red"/>.</li>
          <li>Wie viele Likes du den einzelnen Parteien gegeben hast, wird dir bei der Auswertung am Ende angezeigt. Damit bekommst du eine Orientierung, welcher Partei du am ehesten zugeneigt bist.</li>
        </ul>
      </li>
      <li>
        Sonstiges:
        <ul  :style="{'font-size':'1rem'}">
          <li>Du musst die Antworten nicht lesen, du kannst sie mit einem Klick auf das Lautsprecher-Symbol vorlesen lassen.</li>
          <li>Du kannst auch Fragen später beantworten, indem du auf „Weiter“ oder „Zurück“ klickst ohne zu Überprüfen. Der aktuelle Stand wird gespeichert</li>
          <li>Wenn du auf der letzten Seite auf "Nochmal Spielen" klickst wird der Spielstand zurückgesetzt.</li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.howToPlay{
  //text-align: justify;
  text-align: left;
}
.lucidSymbol{
  height: 1rem;
  width: 1rem;
}
</style>