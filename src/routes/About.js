import React, {useState, useEffect} from "react";
import './About.css';
import Loading from '../components/Loading';

const About=()=> {

    const quiz = {
        topic: 'Javascript',
        level: 'Beginner',
        totalQuestions: 10,
        perQuestionScore: 5,
        totalTime: 60, // in seconds
        questions: [
        {
          question:
          '이재형이 키우는 강아지 이름은?',
          choices: ['뽀식이', '뽀숑이', '망고', '비누'],
          type: 'MCQs',
          correctAnswer: '뽀숑이' },
      
        {
          question:
          '이재형이 결혼하는 나이는?',
          choices: ['33', '35', '40', '안함'],
          type: 'MCQs',
          correctAnswer: '35' },
      
        {
          question:
          '이재형이 사는 곳은?',
          choices: [
          '성남시 분당구 판교동',
          '성남시 분당구 정자동',
          '서울시 강남구 도곡동',
          '경기도 과천'],
      
          type: 'MCQs',
          correctAnswer: '성남시 분당구 판교동' },
      
        {
          question: '이재형이 좋아하는 음식은',
          choices: ['아이스 아메리카노', '코카콜라 망고맛', '민트초코', '아이스크림'],
          type: 'MCQs',
          correctAnswer: '아이스 아메리카노' }]
        };
    
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [result, setResult] = useState({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0 
    });
    const [isLoading, setLoading] = useState(true);

    const { questions } = quiz;
    const { question, choices, correctAnswer } = questions[activeQuestion];

    const onClickNext = () => {
        setSelectedAnswerIndex(null);
        setResult((prev) =>
        selectedAnswer ?
        {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1 } :
    
        { ...prev, wrongAnswers: prev.wrongAnswers + 1 });
    
        if (activeQuestion !== questions.length - 1) {
          setActiveQuestion(prev => prev + 1);
        } else {
          setActiveQuestion(0);
          setShowResult(true);
        }
    };

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index);
        if (answer === correctAnswer) {
          setSelectedAnswer(true);
        } else {
          setSelectedAnswer(false);
        }
    };
    
    const addLeadingZero = number => number > 9 ? number : `0${number}`;
  



    useEffect(() => {
        setInterval(() => setLoading(false), 500);
      });

    return (
        <section className="container">{isLoading? <Loading /> :(
            React.createElement("div", { className: "quiz-container" },
            !showResult ? /*#__PURE__*/
            React.createElement("div", null, /*#__PURE__*/
            React.createElement("div", null, /*#__PURE__*/
            React.createElement("span", { className: "active-question-no" },
            addLeadingZero(activeQuestion + 1)), /*#__PURE__*/
        
            React.createElement("span", { className: "total-question" }, "/",
            addLeadingZero(questions.length))), /*#__PURE__*/
        
        
            React.createElement("h2", null, question), /*#__PURE__*/
            React.createElement("ul", null,
            choices.map((answer, index) => /*#__PURE__*/
            React.createElement("li", {
              onClick: () => onAnswerSelected(answer, index),
              key: answer,
              className:
              selectedAnswerIndex === index ? 'selected-answer' : null },      
            answer))), /*#__PURE__*/        
        
        
            React.createElement("div", { className: "flex-right" }, /*#__PURE__*/
            React.createElement("button", {
              onClick: onClickNext,
              disabled: selectedAnswerIndex === null },
        
            activeQuestion === questions.length - 1 ? 'Finish' : 'Next'))) : /*#__PURE__*/       
            result.wrongAnswers ?
            React.createElement("div", { className: "result" }, /*#__PURE__*/
            React.createElement("h3", null, "결과"), /*#__PURE__*/
        
            React.createElement("p", null, "맞은 갯수:", /*#__PURE__*/
            React.createElement("span", null, " ", result.correctAnswers)), /*#__PURE__*/
        
            React.createElement("p", null, "틀린 갯수:", /*#__PURE__*/
            React.createElement("span", null, " ", result.wrongAnswers)
            )):
            React.createElement("div", { className: "result" }, /*#__PURE__*/
            React.createElement("h3", null, "축하합니다! 다 맞췄습니다 ㅎㅎ"), /*#__PURE__*/)
        ))}    
        </section>
    );
}

export default About;

