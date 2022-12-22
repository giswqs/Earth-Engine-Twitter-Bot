const Twit = require("twit");
const config = require("./config");
const TwitterBot = new Twit(config);

// API

const retweet = () => {
  console.log("====> Retweeting #EarthEngine");
  const params = {
    q: "#EarthEngine",
    result_type: "recent",
    count: 20,
    lang: "en",
  };
  TwitterBot.get("search/tweets", params, (err, data) => {
    // when no errors
    if (!err) {
      console.log(`====> Number of Tweets: ${data.statuses.length}`);
      for (let i = 0; i < data.statuses.length; i++) {
        let retweetID = data.statuses[i].id_str;
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
      }        

    } else {
      console.log(`====> ERROR ${err}`);
    }
  });

  console.log("====> Retweeting #GoogleEarthEngine");
  const params2 = {
    q: "#GoogleEarthEngine",
    result_type: "recent",
    count: 50,
    lang: "en",
  };
  TwitterBot.get("search/tweets", params2, (err, data) => {
    // when no errors
    if (!err) {
      console.log(`====> Number of Tweets: ${data.statuses.length}`);
      for (let i = 0; i < data.statuses.length; i++) {
        let retweetID = data.statuses[i].id_str;
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
      }        

    } else {
      console.log(`====> ERROR ${err}`);
    }
  });
};

retweet();
