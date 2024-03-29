import React, { useState, useEffect, useRef } from "react";
import TextTransition, { presets } from "react-text-transition";
import ReactPlayer from "react-player";
import Sound from "react-sound";
import { useSpring, animated as a } from "react-spring";
import { useMediaQuery } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
function Video() {
  const [playing, setPlaying] = useState(false);
  const [onPlaying, setOnPlaying] = useState(false);
  const [soundPlaying, setSoundPlaying] = useState();
  const matches = useMediaQuery("(min-width:700px )");
  const matchesHeight = useMediaQuery("(min-height:656px)");

  const FirstYesAnswer = [
    "Well,I could not say that it is the earth that you remember. A lot of things have been going on, I mean, in the way you never expected.",
    "“Let me show you the world”",
  ];
  const FirstNoAnswer = [];
  const [audio] = useState(
    typeof Audio !== "undefined" && new Audio("/vid/my-audio.mp3")
  );
  const [volume, setVolume] = useState(0);
  const controls = true;
  const [startClick, setStartClick] = useState(false);

  const [player, setPlayer] = useState();
  const [videoDuration, setVideoDuration] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [checkName, setCheckName] = useState("");
  const [checkAge, setCheckAge] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [formFalse, setFormFalse] = useState("");
  const [zeroQuestionAppend, setZeroQuestionAppend] = useState(null);
  const [beforeQuestionOne, setBeforeQuestionOne] = useState(null);
  const [firstQuestionAppend, setFirstQuestionAppend] = useState(null);
  const [questionOneAns, setQuestionOneAns] = useState(null);
  const [firstQButton, setFirstQButton] = useState(false);
  const [secondQuestionAppend, setSecondQuestionAppend] = useState(null);
  const [questionTwoAnsYes, setQuestionTwoAnsYes] = useState("");
  const [questionTwoAnsNo, setQuestionTwoAnsNo] = useState(false);
  const [questionTwoPartTwoNo, setQuestionTwoPartTwoNo] = useState(false);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isDivVisibleForQ2, setIsDivVisibleforQ2] = useState(false);
  const [watchedOutVisible, setWatchedOutVisible] = useState(null);

  const questionZero = useSpring({
    opacity: zeroQuestionAppend ? "1" : "0",
    background:
      "linear-gradient(137.32deg,rgba(10,8,43,.96) .02%,rgba(39,0,102,.96) 99.96%)",
    padding: "15px",
    borderRadius: "15px",
    config: {
      duration: 2000, // duration for the whole animation form start to end
    },

    // delay:200
    // marginTop: greetingStatus ? 0 : 0
  });
  // First Question Components Style
  const firstContentProps = useSpring({
    opacity: firstQuestionAppend ? 1 : 0, // duration for the whole animation form start to end
    config: {
      duration: 2000,
    },
    background:
      "linear-gradient(137.32deg,rgba(10,8,43,.96) .02%,rgba(39,0,102,.96) 99.96%)",
    padding: "15px",
    borderRadius: "15px",

    // delay:200
    // marginTop: greetingStatus ? 0 : 0
  });
  const watchedOutAsteroid = useSpring({
    opacity: beforeQuestionOne ? 1 : 0, // duration for the whole animation form start to end
    config: {
      duration: 200,
    },
    padding: "15px",
    borderRadius: "15px",

    // delay:200
    // marginTop: greetingStatus ? 0 : 0
  });
  const watchOutText = useSpring({
    opacity: watchedOutVisible == false ? 1 : 0, // duration for the whole animation form start to end
    config: {
      duration: 200,
    },

    // delay:200
    // marginTop: greetingStatus ? 0 : 0
  });
  const watchOutTextTwo = useSpring({
    opacity: watchedOutVisible ? 1 : 0, // duration for the whole animation form start to end
    config: {
      duration: 1000,
    },

    // delay:200
    // marginTop: greetingStatus ? 0 : 0
  });
  const watchOutAngelCome = useSpring({
    opacity: beforeQuestionOne ? "1 " : "0 ",
    transform: beforeQuestionOne ? "translateX(0px) " : "translateX(-500px) ",
    config: {
      duration: 1000, // duration for the whole animation form start to end
    },
  });
  const watchOutAstroCome = useSpring({
    opacity: beforeQuestionOne ? 1 : 0,
    transform: beforeQuestionOne ? "translateX(0px) " : "translateX(500px) ",
    config: {
      duration: 1000, // duration for the whole animation form start to end
    },
  });
  const angelCome = useSpring({
    opacity: firstQuestionAppend ? "1 " : "0 ",
    transform: firstQuestionAppend ? "translateX(0px) " : "translateX(-500px) ",
    config: {
      duration: 1000, // duration for the whole animation form start to end
    },
  });
  const astroCome = useSpring({
    opacity: firstQuestionAppend ? 1 : 0,
    transform: firstQuestionAppend ? "translateX(0px) " : "translateX(500px) ",
    config: {
      duration: 1000, // duration for the whole animation form start to end
    },
  });
  const firstQuestionTitle = useSpring({
    opacity: firstQuestionAppend ? 1 : 0, // duration for the whole animation form start to end
    config: {
      duration: 8000,
    },

    // delay:200
    // marginTop: greetingStatus ? 0 : 0
  });
  const firstQuestionButton = useSpring({
    opacity: firstQuestionAppend ? "1" : "0", // duration for the whole animation form start to end
    config: {
      duration: 1000,
    },

    // delay:200
    // marginTop: greetingStatus ? 0 : 0
  });
  const questionOneAnsProps = useSpring({
    opacity: !isDivVisible ? 1 : 0,
    color: "white",
    delay: 100,

    // marginTop: greetingStatus ? 0 : 0
  });
  const questionOneSecondProps = useSpring({
    opacity: isDivVisible ? 1 : 0,
    color: "white",
    config: {
      duration: 1000,
    },

    // marginTop: greetingStatus ? 0 : 0
  });
  // Second Question Components Style
  const secondContentProps = useSpring({
    opacity: secondQuestionAppend ? 1 : 0,
    // background:

    borderRadius: "15px",
    config: {
      duration: 1000,
    },
    // delay: 100,

    // delay:200
    // marginTop: greetingStatus ? 0 : 0
  });
  const angelComeSecondContent = useSpring({
    opacity: secondQuestionAppend ? "1 " : "0 ",
    transform: secondQuestionAppend
      ? "translateX(0px) "
      : "translateX(-500px) ",
    config: {
      duration: 1000, // duration for the whole animation form start to end
    },
  });
  const astroComeSecondContent = useSpring({
    opacity: secondQuestionAppend ? 1 : 0,
    transform: secondQuestionAppend ? "translateX(0px) " : "translateX(500px) ",
    config: {
      duration: 1000, // duration for the whole animation form start to end
    },
  });
  const secondQuestionButton = useSpring({
    opacity: secondQuestionAppend ? 1 : 0, // duration for the whole animation form start to end
    config: {
      duration: 2000,
    },

    // delay:200
    // marginTop: greetingStatus ? 0 : 0
  });
  const secondContentPropsTwo = useSpring({
    opacity: isDivVisibleForQ2 ? 1 : 0,
    // background:
    //   "linear-gradient(137.32deg,rgba(10,8,43,.96) .02%,rgba(39,0,102,.96) 99.96%)",

    config: {
      duration: 1000,
    },

    // delay:200
    // marginTop: greetingStatus ? 0 : 0
  });
  const secondContentPropsTwoNo = useSpring({
    opacity: 1,
    // background:
    //   "linear-gradient(137.32deg,rgba(10,8,43,.96) .02%,rgba(39,0,102,.96) 99.96%)",
    padding: "15px",
    borderRadius: "15px",
    config: {
      duration: 1000,
    },

    // delay:200
    // marginTop: greetingStatus ? 0 : 0
  });
  // const currentTime = useRef(getCurrentTime());
  // useEffect(()=>{
  //   setPlaying(true)
  //   setVolume(1)
  // },[])

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsDivVisible(true)
  //     console.log('5 seconds later')
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);
  useEffect(() => {
    // onPlaying ? : audio.pause();
    // if (onPlaying == true) {
    //   audio.play();
    //   audio.loop = true;
    // } else {
    //   audio.pause();
    // }
    // if (questionOneAns == null) {
    //   // setTimeout(() => {
    //   questionOne("Yes");
    //   // }, 16000);
    // }
    if (currentTime > 28 && currentTime < 29) {
      setWatchedOutVisible(true);
    }
    if (currentTime > 33 && currentTime < 34) {
      setBeforeQuestionOne(false);
    }
    if (currentTime > 18 && currentTime < 21) {
      setWatchedOutVisible(false);
    }
    if (currentTime > 36 && currentTime < 37) {
      // if (questionOneAns == " ") {
      // setPlaying(false);
      setFirstQuestionAppend(true);
      // }
      // console.log(player.getCurrentTime())
    }
    if (currentTime > 41 && questionOneAns == null) {
      // if (questionOneAns == " ") {
      // setPlaying(false);
      questionOne("Yes");
      // }
      // console.log(player.getCurrentTime())
    }
    // if (currentTime > 49 && currentTime < 50) {
    //   // if (questionOneAns == " ") {
    //   // setPlaying(false);
    //   setIsDivVisible(true);
    //   setPlaying(false);
    //   // }
    //   // console.log(player.getCurrentTime())
    // }
    if (currentTime > 117 && currentTime < 118) {
      if (secondQuestionAppend == null) {
        // setPlaying(false);
        setSecondQuestionAppend(true);
      }
      // console.log(player.getCurrentTime())
    }
    // }
  }, [currentTime, onPlaying]);
  console.log(currentTime);
  const startGame = () => {
    setPlaying(true);
    setOnPlaying(true);
    // startSound();
    setVolume(1);
    setStartClick(true);
    setTimeout(() => {
      setZeroQuestionAppend(true);
      setPlaying(false);
      audio.play();
    }, 12000);
    console.log("start");
  };

  const soundref = (e) => {
    setSoundPlaying(e);
  };
  // console.log(playing)

  const ref = (player) => {
    setPlayer(player);
    // console.log(player);
    // const {context} = player
    // console.log(context)
  };
  const onDuration = (duration) => {
    setVideoDuration(duration);
  };
  const onProgress = (progress) => {
    const second = (progress.played * videoDuration).toFixed(3);
    setCurrentTime(second);
    // console.log(second);
    // console.log({second})
  };

  const pauseVideo = () => {
    setPlaying(false);
  };
  // while(currentTime >0.05){
  //   // setPlaying(false)
  //   setFirstQappend(true)
  // }
  // useEffect(() => {

  //   if (currentTime > 1 && currentTime < 2) {
  //     if (zeroQuestionAppend == null) {
  //       setPlaying(false);
  //       setZeroQuestionAppend(true);
  //     }

  //   }

  // }, [currentTime]);

  // Question0-start
  const onSubmitForm = () => {
    if (!checkName || !checkAge) {
      setFormFalse(true);
    }
    if (checkName && checkAge) {
      setFormFalse(false);
      setName(checkName);
      setAge(checkAge);
      setZeroQuestionAppend(false);
      setPlaying(true);
      audio.pause();
      // setFirstQuestionAppend(true);

      setTimeout(() => {
        // setPlaying(false);
        setBeforeQuestionOne(true);
        // setFirstQuestionAppend(true);

        // console.log("10 seconds later");
      }, 1500);
      // setTimeout(() => {
      //   // setPlaying(false);
      //   setWatchedOutVisible(true);

      //   // console.log("10 seconds later");
      // }, 3500);

      // return () => clearTimeout(timer);
    }
  };
  // const firstQAppend = ()=>{

  // }
  // Q2
  const questionOne = (answer) => {
    setQuestionOneAns(answer);
    // setQuestionOneAnsDuration(true);
    setPlaying(true);
    setFirstQuestionAppend(false);
    // const ansDuration = setTimeout(() => {
    //   setQuestionOneAnsDuration(false);
    // }, 18000);
    // clearTimeout(ansDuration);
    setTimeout(() => {
      setIsDivVisible(true);
      setPlaying(false);
    }, 7000);
    // setTimeout(() => {
    //   setIsDivVisible(true);
    //   setPlaying(false);

    //   // console.log("15 seconds later");
    // }, 26000);
    // return () => clearTimeout(timer);
  };
  //  Q3

  const questionTwo = (answer) => {
    if (answer == "Yes") {
      setQuestionTwoAnsYes(
        "You’ve made the right choice, but before that I suggest you prepare yourself for the changes."
      );
      setPlaying(true);
      const timer = setTimeout(() => {
        setIsDivVisibleforQ2(true);
        // console.log("10 seconds later");
      }, 5000);
      return () => clearTimeout(timer);
    }

    if (answer == "No") {
      setQuestionTwoAnsNo(true);
      // setPlaying(true)
    }
  };

  const questionTwoPartTwo = (ans) => {
    if (ans == "No") {
      setQuestionTwoPartTwoNo(true);
      setPlaying(true);
      const timer = setTimeout(() => {
        setIsDivVisibleforQ2(true);
        // console.log("10 seconds later");
      }, 5000);
      return () => clearTimeout(timer);
    }
  };
  const router = useRouter();
  // const lastQuestion = (e) => {
  //   if (e == "Education") {
  //     router.push("https://mentalmu.wixsite.com/bjm13/game2");
  //   }
  //   if (e == "Love") {
  //     router.push("https://mentalmu.wixsite.com/bjm13/home1");
  //   }
  //   if (e == "Health") {
  //     router.push("​https://mentalmu.wixsite.com/bjm13/game1");
  //   }
  //   if (e == "Money") {
  //     router.push("​https://mentalmu.wixsite.com/bjm13/game");
  //   }
  //   if (e == "Luck") {
  //     router.push("​https://mentalmu.wixsite.com/bjm13/game3");
  //   }
  //   if (e == "Friendship") {
  //     router.push("https://mentalmu.wixsite.com/bjm13/social-life-friendship");
  //   }
  // };
  const setTheName = (e) => {
    const text = e.target.value;
    setCheckName(text);
  };
  const setTheAge = (e) => {
    const text = e.target.value;
    setCheckAge(text);
  };

  return (
    <div className="game-section">
      {/* <Sound
        url="vid/grand.mp3"
        volume={volume}
        loop={true}
        playStatus={onPlaying}
        ref={soundref}
        autoLoad={onPlaying}
      /> */}
      <ReactPlayer
        ref={ref}
        playing={playing}
        // onReady={() => {
        //   setTimeout(() => {
        //     setPlaying(true);
        //     setVolume(1);
        //   }, 1000);
        // }}
        url="vid/main.mp4"
        className="player"
        height="100%"
        width="100%"
        volume={volume}
        playsinline
        onProgress={onProgress}
        onDuration={onDuration}
        // muted
        // controls={controls}
      />
      <div className="gameStart-content">
        <div className="gamename-input">
          {/* <h5 style={{color:'red',padding:'0',margin:'0'}}</h5> */}
          <div
            onClick={startGame}
            className={startClick ? "display-none" : "start-btn"}
          >
            PRESS START
          </div>
        </div>
      </div>
      {zeroQuestionAppend && (
        <a.div className="gameStart-content question-zero" style={questionZero}>
          <div className="game-q1 row">
            {matches && (
              <div className="col-xs-12 col-xl-6 d-flex align-items-center justify-content-center ">
                <img src="image/angel.png" width="auto" height={400} />
              </div>
            )}
            <div
              className={`col-xs-12 col-xl-6 text-center ${
                matches && `the-text form-background`
              } d-flex align-items-center justify-content-center `}
            >
              <div className="d-flex flex-column w-100">
                <div className="d-flex flex-column">
                  <div className={matches ? "text-white" : "text-white"}>
                    Wow! Such a long trip. How have been? You still got it ,
                    (answer your name)
                  </div>
                  <input onChange={setTheName} />
                </div>
                <div className="d-flex flex-column">
                  <div className={matches ? "text-white" : "text-white"}>
                    How long you have been on this journey for your whole life
                    (Your age)
                  </div>
                  <input onChange={setTheAge} />
                </div>
                <div
                  className={matches ? "submit-btn" : "submit-btn-mobile"}
                  onClick={onSubmitForm}
                >
                  Submit
                </div>
                {formFalse && (
                  <div
                    className="mt-2 text-danger"
                    style={{ fontSize: "15px" }}
                  >
                    Please commit the form
                  </div>
                )}
              </div>
            </div>
          </div>
        </a.div>
      )}
      {/* Watched out the asteroid */}
      {beforeQuestionOne && (
        <div className="gameStart-content" style={{ width: "80%" }}>
          <a.div
            className="game-q1 row justify-content-center align-items-center"
            style={watchedOutAsteroid}
          >
            {matches && matchesHeight && (
              <div className="col-xs-12 d-flex align-items-center justify-content-center ">
                <a.div style={watchOutAngelCome}>
                  <img src="image/angel.png" width="auto" height={400} />
                </a.div>
                <a.div style={watchOutAstroCome}>
                  <img src="image/astronaut.png" width="auto" height={400} />
                </a.div>
                {/* <img src="image/angel.png" width="auto" height={400} /> */}
              </div>
            )}
            {watchedOutVisible == false ? (
              <a.div
                className={`col-xs-12 text-center ${
                  matches && `the-text text-white`
                } d-flex align-items-center justify-content-center`}
                style={watchOutText}
              >
                Watched out! That’s the asteroid !!!
              </a.div>
            ) : (
              <a.div
                className={`col-xs-12 text-center ${
                  matches && `the-text the-text`
                } d-flex align-items-center justify-content-center`}
                style={watchOutTextTwo}
              >
                See! Life is thrilling!!! Any unexpectation could happen!
              </a.div>
            )}
          </a.div>
        </div>
      )}
      {/* Question 1 */}
      {firstQuestionAppend && (
        <>
          <div className="game-content d-flex flex-column align-items-center">
            {/* <a.div className="watched-out" style={watchedOutAsteroid}>
              Watched out the asteroid
            </a.div> */}
            <a.div style={firstContentProps}>
              {matches && matchesHeight && (
                <div className="game-content d-flex image">
                  <a.div style={angelCome}>
                    <img src="image/angel.png" width="auto" height={400} />
                  </a.div>
                  <a.div style={astroCome}>
                    <img src="image/astronaut.png" width="auto" height={400} />
                  </a.div>
                </div>
              )}
              <div className="game-q1">
                <a.div style={{ firstQuestionTitle }} className="q1-title">
                  Are you ready to get back to Earth
                </a.div>
                <div className="game-group">
                  <div className="game-choice-group">
                    <a.div
                      className="game-choice-btn"
                      style={firstQuestionButton}
                      onClick={() => questionOne("Yes")}
                    >
                      Yes,Absolutely
                    </a.div>

                    <a.div
                      className="game-choice-btn"
                      style={firstQuestionButton}
                      onClick={() => questionOne("No")}
                    >
                      No
                    </a.div>
                  </div>
                </div>
              </div>
            </a.div>
          </div>
        </>
      )}
      {questionOneAns && (
        <div className="gameStart-content" style={{ width: "80%" }}>
          {isDivVisible == false && (
            <a.div className="game-q1 row" style={questionOneAnsProps}>
              {matches && matchesHeight && (
                <div className="col-xs-12 col-xl-6 d-flex align-items-center justify-content-center ">
                  <img src="image/angel.png" width="auto" height={400} />
                </div>
              )}
              <div
                className={`col-xs-12 col-xl-6 text-center ${
                  matches && `the-text the-text-background`
                } d-flex align-items-center`}
              >
                {questionOneAns == "Yes"
                  ? "Well, I could not say that it is the earth that you remember. A lot of things have been going on, I mean, in the way you never expected."
                  : "Well, but  something beautiful has been created while you take a trip in the space"}
              </div>
            </a.div>
          )}
          {isDivVisible && (
            <div className="game-q1">
              <a.div className="w-100" style={questionOneSecondProps}>
                <div className="d-flex justify-content-center">
                  <img src="https://nineplanets.org/wp-content/uploads/2019/09/earth.png" />
                  <div
                    className="earth-click"
                    onClick={() => {
                      setIsDivVisible(null);
                      setPlaying(true);
                    }}
                  >
                    CLICK ME
                  </div>
                </div>
                <div style={{ width: "400px" }} className="text-center m-auto">
                  Let me show you the world
                </div>
              </a.div>
            </div>
          )}
        </div>
      )}
      {/* End of Question 1 */}
      {/* Question two */}
      {secondQuestionAppend && !questionTwoAnsYes && !questionTwoAnsNo && (
        <a.div className="game-content" style={secondContentProps}>
          {questionOneAns == "Yes" ? (
            <div className="game-q1 game-q2-yes">
              {matches && matchesHeight && (
                <div className="game-content d-flex image">
                  <a.div style={angelComeSecondContent}>
                    <img
                      src="image/angel.png"
                      width="auto"
                      height={400}
                      style={{
                        position: "relative",
                        top: "-10px",
                        left: "20px",
                      }}
                      className="image"
                    />
                  </a.div>
                  <a.div style={astroComeSecondContent}>
                    <img
                      src="image/astronaut.png"
                      width="auto"
                      height={400}
                      style={{
                        position: "relative",
                        top: "-10px",
                        left: "-20px",
                      }}
                    />
                  </a.div>
                </div>
              )}
              <div style={{ textAlign: "center", margin: "10px 0px" }}>
                Do you still want to return to earth, Is earth still a home for
                you actually?
              </div>
              <div className="game-group">
                <div className="game-choice-group">
                  <a.div
                    className="game-choice-btn"
                    style={secondQuestionButton}
                    onClick={() => questionTwo("Yes")}
                  >
                    Yes, it always be my home
                  </a.div>

                  <a.div
                    className="game-choice-btn"
                    style={secondQuestionButton}
                    onClick={() => questionTwo("No")}
                  >
                    Not sure that I can handle the change
                  </a.div>
                </div>
              </div>
            </div>
          ) : (
            <div className="game-q1 game-q2-yes">
              {matches && matchesHeight && (
                <div className="game-content d-flex">
                  <a.div style={angelComeSecondContent}>
                    <img
                      src="image/angel.png"
                      width="auto"
                      height={400}
                      style={{
                        position: "relative",
                        top: "-10px",
                        left: "20px",
                      }}
                    />
                  </a.div>
                  <a.div style={astroComeSecondContent}>
                    <img
                      src="image/astronaut.png"
                      width="auto"
                      height={400}
                      style={{
                        position: "relative",
                        top: "-10px",
                        left: "-20px",
                      }}
                    />
                  </a.div>
                </div>
              )}
              <div style={{ textAlign: "center", margin: "10px 0px" }}>
                Want to change your mind about returning to our beloved home?{" "}
              </div>
              <div className="game-group">
                <div className="game-choice-group">
                  <a.div
                    className="game-choice-btn"
                    style={secondQuestionButton}
                    onClick={() => questionTwo("Yes")}
                  >
                    Let’s go home, I’ve changed my mind
                  </a.div>

                  <a.div
                    className="game-choice-btn"
                    style={secondQuestionButton}
                    onClick={() => questionTwo("No")}
                  >
                    I don’t want to go back{" "}
                  </a.div>
                </div>
              </div>
            </div>
          )}
        </a.div>
      )}

      {questionTwoAnsNo && !questionTwoAnsYes && !questionTwoPartTwoNo && (
        <a.div className="game-content" style={secondContentPropsTwoNo}>
          <div className="game-q1 game-q2-yes">
            {matches && matchesHeight && (
              <div className="game-content d-flex image">
                <div>
                  <img src="image/angel.png" width="auto" height={400} />
                </div>
                <div>
                  <img src="image/astronaut.png" width="auto" height={400} />
                </div>
              </div>
            )}
            <div
              style={{
                textAlign: "center",
                margin: "10px 0px",
              }}
            >
              Actually, the chaos that you’ve seen may not come from the outside
              but from the inside so give the world a try!!!
            </div>
            <div className="game-group">
              <div className="game-choice-group">
                {/* Ans Yes Again */}
                <div
                  className="game-choice-btn"
                  onClick={() => questionTwo("Yes")}
                >
                  Yeah, let’s go back home
                </div>

                <div
                  className="game-choice-btn"
                  onClick={() => questionTwoPartTwo("No")}
                >
                  Meh, still not sure{" "}
                </div>
              </div>
            </div>
          </div>
        </a.div>
      )}

      {questionTwoAnsYes && (
        <div className="gameStart-content last-game-container">
          {!isDivVisibleForQ2 ? (
            //  First Transition
            <div className="gamename-input">
              {/* <h5 style={{color:'red',padding:'0',margin:'0'}}</h5> */}
              <div className="text-white the-text">{questionTwoAnsYes}</div>
            </div>
          ) : (
            //  Second Transition
            <a.div
              className="gamename-input last-game-container"
              style={secondContentPropsTwo}
            >
              {/* <h5 style={{color:'red',padding:'0',margin:'0'}}</h5> */}
              <div className="text-white text-center">
                {age} Years since you left the earth. Do you still remember what
                it was like?
              </div>
              <div className="game-q1 game-q2-yes">
                <div style={{ textAlign: "center", margin: "10px 0px" }}>
                  Any stagnant that burden your life:
                </div>
                <div className="game-group">
                  <div className="last-game-choice-group">
                    <div className="row">
                      <div
                        className="last-game-choice-btn col-12"
                        // onClick={() => lastQuestion("Love")}
                      >
                        <Link href="https://mentalmu.wixsite.com/bjm13/home1">
                          <div className="text-center  my-button">Love</div>
                        </Link>
                      </div>
                      <div
                        className="last-game-choice-btn col-12"
                        // onClick={() => lastQuestion("Money")}
                      >
                        <Link href="https://mentalmu.wixsite.com/bjm13/game">
                          <div className="text-center  my-button">Money</div>
                        </Link>
                      </div>
                      <div
                        className="last-game-choice-btn col-12"
                        // onClick={() => lastQuestion("Luck")}
                      >
                        <Link href="https://mentalmu.wixsite.com/bjm13/game3">
                          <div className="text-center  my-button">Luck</div>
                        </Link>
                      </div>
                      <div
                        className="last-game-choice-btn col-12"
                        // onClick={() => lastQuestion("Health")}
                      >
                        <Link href="https://mentalmu.wixsite.com/bjm13/game1">
                          <div className="text-center  my-button">Health</div>
                        </Link>
                      </div>
                      <div
                        className="last-game-choice-btn col-12"
                        // onClick={() => lastQuestion("Friendship ")}
                      >
                        <Link href="https://mentalmu.wixsite.com/bjm13/social-life-friendship">
                          <div className="text-center  my-button">
                            Friendship
                          </div>
                        </Link>
                      </div>
                      <div
                        className="last-game-choice-btn col-12"
                        // onClick={() => lastQuestion("Education")}
                      >
                        <Link href="https://mentalmu.wixsite.com/bjm13/game2">
                          <div className="text-center  my-button">
                            Education
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a.div>
          )}
        </div>
      )}
      {questionTwoPartTwoNo && (
        <div className="gameStart-content last-game-container">
          {!isDivVisibleForQ2 ? (
            //  First Transition
            <div className="gamename-input ">
              {/* <h5 style={{color:'red',padding:'0',margin:'0'}}</h5> */}
              <div className="row">
                {matches && matchesHeight && (
                  <div className="col-xs-12 col-xl-6 d-flex align-items-center justify-content-center ">
                    <img src="image/angel.png" width="auto" height={400} />
                  </div>
                )}
                <div
                  className={`col-xs-12 col-xl-6 text-center ${
                    matches && `the-text the-text-background`
                  } d-flex align-items-center`}
                >
                  Before returning back to our home you should check your
                  spiritual health first!
                </div>
              </div>
            </div>
          ) : (
            //  Second Transition
            <a.div
              className="gamename-input last-game-container"
              style={secondContentPropsTwo}
            >
              {/* <h5 style={{color:'red',padding:'0',margin:'0'}}</h5> */}
              <div className="text-white"></div>
              <div className="game-q1 game-q2-yes">
                <div style={{ textAlign: "center", margin: "10px 0px" }}>
                  So what’s the problem that make you not sure
                </div>
                <div className="game-group">
                  <div className="last-game-choice-group">
                    <div className="row">
                      <div
                        className="last-game-choice-btn col-12"
                        // onClick={() => lastQuestion("Love")}
                      >
                        <Link href="https://mentalmu.wixsite.com/bjm13/home1">
                          <div className="text-center  my-button">Love</div>
                        </Link>
                      </div>
                      <div
                        className="last-game-choice-btn col-12"
                        // onClick={() => lastQuestion("Money")}
                      >
                        <Link href="https://mentalmu.wixsite.com/bjm13/game">
                          <div className="text-center  my-button">Money</div>
                        </Link>
                      </div>
                      <div
                        className="last-game-choice-btn col-12"
                        // onClick={() => lastQuestion("Luck")}
                      >
                        <Link href="https://mentalmu.wixsite.com/bjm13/game3">
                          <div className="text-center  my-button">Luck</div>
                        </Link>
                      </div>
                      <div
                        className="last-game-choice-btn col-12"
                        // onClick={() => lastQuestion("Health")}
                      >
                        <Link href="https://mentalmu.wixsite.com/bjm13/game1">
                          <div className="text-center  my-button">Health</div>
                        </Link>
                      </div>
                      <div
                        className="last-game-choice-btn col-12"
                        // onClick={() => lastQuestion("Friendship ")}
                      >
                        <Link href="https://mentalmu.wixsite.com/bjm13/social-life-friendship">
                          <div className="text-center  my-button">
                            Friendship
                          </div>
                        </Link>
                      </div>
                      <div
                        className="last-game-choice-btn col-12"
                        // onClick={() => lastQuestion("Education")}
                      >
                        <Link href="https://mentalmu.wixsite.com/bjm13/game2">
                          <div className="text-center  my-button">
                            Education
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a.div>
          )}
        </div>
      )}

      <style jsx global>
        {`
          body {
            background: black;
          }
          .player {
            z-index: -2 !important;
          }
          .submit-btn,
          .submit-btn-mobile {
            margin-top: 5px;
            border-radius: 15px;
            padding: 5px;
            margin: 10px 0px;
            cursor: pointer;
          }
          .submit-btn {
            background: linear-gradient(180deg, #79c1f4, #4300d2);
          }
          .submit-btn-mobile {
            background: linear-gradient(180deg, #79c1f4, #4300d2);
          }
          .image {
            z-index: -5 !important;
          }
          @media only screen and (max-width: 750px) {
            .last-game-container {
              width: 100%;
              background: linear-gradient(
                137.32deg,
                rgba(10, 8, 43, 0.96) 0.02%,
                rgba(39, 0, 102, 0.96) 99.96%
              );
            }
          }

          .display-none {
            opacity: 0;
            display: none;
          }
          .game-section {
            position: relative;
            display: flex;
            width: auto;
            height: 100vh;
            overflow: hidden;
            // background: black;
            // z-index: -5 !important;
          }

          .the-text {
            font-size: 3rem;
            text-align: center;
          }
          .the-text-background {
            background: white;
            border: 5px solid black;
            color: black;
          }
          .form-background {
            // background: white;
            // border: 5px solid black;
            color: black;
          }
          .gameStart-content {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .question-zero {
            width: 70%;
          }
          .start-btn {
            background: linear-gradient(180deg, #79c1f4, #4300d2);
            cursor: pointer;
            opacity: 1;
            border-radius: 30px;
            padding: 10px;
          }

          .game-content {
            position: absolute;
            width: 100%;
            left: 50%;
            bottom: 0%;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: center;
          }
          .game-group {
            display: flex;
            width: 100%;
            justify-content: center;
          }
          .watched-out {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -510%);
            text-align: center;
          }
          .q1-title {
            text-align: center;
            margin: 10px 0px;
          }
          .game-choice-group {
            display: flex;
            justify-content: center;

            flex-direction: row;
            width: 100%;
            padding: 15px;
            width: 80%;
          }
          .last-game-choice-group {
            // display:flex;
            // flex-direction:column;
            width: 100%;
            padding: 5px;
          }
          .game-choice-btn,
          last-game-choice-btn {
            background: linear-gradient(
              180deg,
              rgba(43, 67, 129, 0.96) 0.02%,
              rgba(31, 10, 90, 0.96) 99.96%
            );
            cursor: pointer;
            opacity: 1;
            border-radius: 20px;
            padding: 5px 4px;
            width: 100%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .game-choice-btn:hover,
          last-game-choice-btn:hover {
            background: linear-gradient(180deg, #79c1f4, #4300d2);
          }
          .game-choice-btn {
            margin: 0px 2px;
          }
          .last-game-choice-btn {
            padding-top: 10px;
          }
          .last-game-choice-btn .my-button {
            cursor: pointer;
            border-radius: 15px;
            padding: 5px;

            background: linear-gradient(
              180deg,
              rgba(43, 67, 129, 0.96) 0.02%,
              rgba(31, 10, 90, 0.96) 99.96%
            );
          }
          .last-game-choice-btn .my-button:hover {
            background: linear-gradient(180deg, #79c1f4, #4300d2);
          }
          .game-q1 {
            opacity: 1;
            transition: all 5s linear;
            // background: linear-gradient(
            //   137.32deg,
            //   rgba(10, 8, 43, 0.96) 0.02%,
            //   rgba(39, 0, 102, 0.96) 99.96%
            // );
            color: white;
          }
          .game-q2-yes {
            background: linear-gradient(
              137.32deg,
              rgba(10, 8, 43, 0.96) 0.02%,
              rgba(39, 0, 102, 0.96) 99.96%
            );
            border-radius: 15px;
          }
          .earth-click {
            position: absolute;
            // left:40%;
            top: 40%;
            font-size: 3rem;
            color: white;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

export default Video;
