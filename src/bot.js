const Twit = require("twit");
const config = require("./config");
const TwitterBot = new Twit(config);

// API

const retweet = () => {
  const params = {
    q: "#EarthEngine",
    result_type: "recent",
    count: 50,
    lang: "en",
  };
  TwitterBot.get("search/tweets", params, (err, data) => {
    // when no errors
    if (!err) {
      let retweetID = data.statuses[0].id_str;
      TwitterBot.post(
        "statuses/retweet/:id",
        { id: retweetID },
        (err, res) => {
          if (res) {
            console.log(`====> RETWEET SUCCESS ${retweetID}`);
          }
          if (err) {
            console.log(`====> ERROR in RETWEET ${err}`);
          }
        }
      );
    } else {
      console.log(`====> ERROR ${err}`);
    }
  });
};

retweet();
