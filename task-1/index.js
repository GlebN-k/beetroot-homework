// Створити сторінку, що показує нумерований список пісень:
var playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const list = document.createElement("ol");
const div = document.createElement("div");
const main = document.querySelector("main");

div.innerHTML = "LIST OF THE SONGS";
div.className = "name-list";

playList.forEach((el) => {
  const li = document.createElement("li");
  li.innerHTML = `${el.author}: ${el.song}`;
  list.append(li);
});

main.append(div);
main.append(list);
