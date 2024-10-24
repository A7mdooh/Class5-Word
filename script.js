const quizData = [
    {
        question: "ما هو عمل الأداة المشار إليها في الصورة؟",
        answers: [
            "زيادة حجم الخط",
            "تغيير لون الخط",
            "جعل النص مائلًا",
            "محاذاة النص إلى اليمين"
        ],
        correctAnswer: 0,
        image: "assets/images/fontSize.jpg"
    },
    {
        question: "ما هو عمل الأداة المشار إليها في الصورة؟",
        answers: [
            "جعل النص غامقًا",
            "تغيير حجم الخط",
            "محاذاة النص إلى اليسار",
            "تغيير لون الخط"
        ],
        correctAnswer: 0,
        image: "assets/images/Bold.jpg"
    },
    {
        question: "ما هو عمل الأداة المشار إليها في الصورة؟",
        answers: [
            "محاذاة النص إلى الوسط",
            "محاذاة النص إلى اليمين",
            "زيادة حجم الخط",
            "تغيير لون الخط"
        ],
        correctAnswer: 1,
        image: "assets/images/alignRight.jpg"
    },
    {
        question: "ما هو عمل الأداة المشار إليها في الصورة؟",
        answers: [
            "تغيير نوع الخط",
            "زيادة حجم الخط",
            "تغيير لون الخط",
            "محاذاة النص"
        ],
        correctAnswer: 0,
        image: "assets/images/font.jpg"
    },
    {
            question: "إضافة (حدود) إلى النص",
            answers: [
                "يجعل العنوان في الصفحة أكثر تميّزًا.",
                "يضبط المسافة العمودية بين أسطر النص، مما يسهل قراءة النص أو يزيد المساحة في الصفحة.",
                "يُستخدم لتمييز الأقسام المهمة أو لتنظيم المعلومات بطريقة واضحة وجذابة.",
                "يضيف لون خلفية للنص لإبراز الأجزاء المهمة."
            ],
            correctAnswer: 2
    },
    {
            question: "تغيير تباعد الأسطر",
            answers: [
                "يجعل العنوان في الصفحة أكثر تميّزًا.",
                "يضبط المسافة العمودية بين أسطر النص، مما يسهل قراءة النص أو يزيد المساحة في الصفحة.",
                "يُستخدم لتمييز الأقسام المهمة أو لتنظيم المعلومات بطريقة واضحة وجذابة.",
                "يضيف لون خلفية للنص لإبراز الأجزاء المهمة."
            ],
            correctAnswer: 1
    },
    {
            question: "محاذاة النص إلى الوسط",
            answers: [
                "يجعل العنوان في الصفحة أكثر تميّزًا.",
                "يضبط المسافة العمودية بين أسطر النص، مما يسهل قراءة النص أو يزيد المساحة في الصفحة.",
                "يُستخدم لتمييز الأقسام المهمة أو لتنظيم المعلومات بطريقة واضحة وجذابة.",
                "يضيف لون خلفية للنص لإبراز الأجزاء المهمة."
            ],
            correctAnswer: 0
    },
    {
            question: "إضافة(تظليل) إلى النص",
            answers: [
                "يجعل العنوان في الصفحة أكثر تميّزًا.",
                "يضبط المسافة العمودية بين أسطر النص، مما يسهل قراءة النص أو يزيد المساحة في الصفحة.",
                "يُستخدم لتمييز الأقسام المهمة أو لتنظيم المعلومات بطريقة واضحة وجذابة.",
                "يضيف لون خلفية للنص لإبراز الأجزاء المهمة."
            ],
            correctAnswer: 3
    },
    {
        question: "ما هو عمل الأداة المشار إليها في الصورة؟",
        answers: [
            "جعل النص مائلًا",
            "جعل النص غامقًا",
            "تحته خط",
            "تغيير حجم الخط"
        ],
        correctAnswer: 0,
        image: "assets/images/italic.jpg"
    },
    {
        question: "ما هو عمل الأداة المشار إليها في الصورة؟",
        answers: [
            "تغيير لون الخط",
            "محاذاة النص إلى اليمين",
            "تحديد لون تمييز النص",
            "زيادة حجم الخط"
        ],
        correctAnswer: 0,
        image: "assets/images/Fcolor.jpg"
    },
    {
        question: "ما هو عمل الأداة المشار إليها في الصورة؟",
        answers: [
            "تحديد المسافة بين أسطر النص",
            "جعل النص مائلًا",
            "تغيير نمط الخط",
            "تغيير لون الخط"
        ],
        correctAnswer: 0,
        image: "assets/images/lineSpacing.jpg"
    },
    {
        question: "ما هو عمل الأداة المشار إليها في الصورة؟",
        answers: [
            "محاذاة النص إلى الوسط",
            "زيادة حجم الخط",
            "محاذاة النص إلى اليسار",
            "تغيير لون الخط"
        ],
        correctAnswer: 0,
        image: "assets/images/alignCenter.jpg"
    },
    {
        question: "ما هو عمل الأداة المشار إليها في الصورة؟",
        answers: [
            "ضبط",
            "جعل النص غامقًا",
            "زيادة حجم الخط",
            "تحديد لون تمييز النص"
        ],
        correctAnswer: 0,
        image: "assets/images/J.jpg"
	},
    {
        question: "ما هو عمل الأداة المشار إليها في الصورة؟",
        answers: [
            "محاذاة النص لليمين",
            "تغيير لون الخط",
            "محاذاة النص لليسار",
            "إدراج مسافة بادئة"
        ],
        correctAnswer: 2,
        image: "assets/images/L.jpg"
    },
    {
        question: "ما هو عمل الأداة المشار إليها في الصورة؟",
        answers: [
            "تحريك الفقرة إلى اليسار أو اليمين",
            "إدراج خط عمودي",
            "تغيير لون التسطير",
            "إزالة التسطير"
        ],
        correctAnswer: 0,
        image: "assets/images/LR.jpg"
    },
    {
        question: "ما هو عمل الأداة المشار إليها في الصورة؟",
        answers: [
            "زيادة او نقصان المسافة البادئة",
            "محاذاة النص إلى اليمين",
            "تغيير نوع الخط",
            "إدراج مسافة بين الفقرات"
        ],
        correctAnswer: 0,
        image: "assets/images/msa.jpg"
    },
    {
        question: "ما هو عمل الأداة المشار إليها في الصورة؟",
        answers: [
            "تعداد رقمي",
            "زيادة حجم الخط",
            "تحته خط",
            "محاذاة النص لليمين"
        ],
        correctAnswer: 0,
        image: "assets/images/TNM.jpg"
    },
    {
        question: "ما هو عمل الأداة المشار إليها في الصورة؟",
        answers: [
            "ضبط حجم الخط",
            "تسطير",
            "إزالة التسطير",
            "تحته خط"
        ],
        correctAnswer: 1,
        image: "assets/images/U.jpg"
    },
    {
        question: "ما هو عمل الأداة المشار إليها في الصورة؟",
        answers: [
            "تعداد نقطي",
            "محاذاة النص لليمين",
            "محاذاة النص لليسار",
            "إضافة مسافة بين الكلمات"
        ],
        correctAnswer: 0,
        image: "assets/images/TN.jpg"
    },
    {
        question: "ما هو عمل الأداة المشار إليها في الصورة؟",
        answers: [
            "إدراج خط تحت النص",
            "محاذاة الفقرة لليمين",
            "تحته خط",
            "تصغير النص"
        ],
        correctAnswer: 3,
        image: "assets/images/smoll.jpg"
    },
    {
        question: "ما هو عمل الأداة المشار إليها في الصورة؟",
        answers: [
            "تكبير الخط",
            "إضافة لون خلفية",
            "عمل حد",
            "زيادة حجم النص"
        ],
        correctAnswer: 2,
        image: "assets/images/bo.jpg"
    },
    {
        question: "ما هو عمل الأداة المشار إليها في الصورة؟",
        answers: [
            "تحته خط",
            "تغيير حجم النص",
            "لون تميز النص",
            "محاذاة النص إلى اليمين"
        ],
        correctAnswer: 2,
        image: "assets/images/FB.jpg"
    },
    {
        question: "نقوم بمحاذاة النص في المستند لـ",
        answers: [
            "إنشاء مسافة بادئة للنص أو الفقرة.",
            "إنشاء مظهر موحد بوجه القارئ ويسهل القراءة.",
            "الدلالة على بداية فقرة جديدة.",
            "تغيير حجم النص ليصبح أكبر."
        ],
        correctAnswer: 1
    },
    {
        question: "الغرض الأساسي من إضافة مسافة بادئة للفقرة لـ",
        answers: [
            "الدلالة على بداية فكرة جديدة.",
            "إنشاء مظهر موحد وواضح للقارئ.",
            "التمييز بين الفقرات وتسهيل القراءة.",
            "جعل النص غامقًا لإبراز العنوان."
        ],
        correctAnswer: 2
    },
    {
        question: "الهدف من تقسيم موضوعك إلى فقرات لـ",
        answers: [
            "الإشارة إلى تغيير في الموضوع.",
            "جعل الانتقال بين الأفكار أكثر سلاسة ووضوحًا.",
            "زيادة المساحة في الصفحة.",
            "تحسين ترتيب الأفكار في النص."
        ],
        correctAnswer: 1
    },

    {
            question: "ما هو عمل الأداة المشار إليها في الصورة؟",
            answers: [
                "إدراج أيقونات",
                "إدراج شكل",
                "إدراج صورة",
                "إدراج SmartArt"
            ],
            correctAnswer: 0,
            image: "assets/images/icon.jpg"
    },
    {
            question: "ما هو عمل الأداة المشار إليها في الصورة؟",
            answers: [
                "إدراج صورة",
                "إدراج أيقونات",
                "إدراج 3D Models",
                "إدراج SmartArt"
            ],
            correctAnswer: 0,
            image: "assets/images/pic.jpg"
    },
    {
            question: "ما هو عمل الأداة المشار إليها في الصورة؟",
            answers: [
                "إدراج أيقونات",
                "إدراج شكل",
                "إدراج صورة",
                "إدراج مخطط"
            ],
            correctAnswer: 1,
            image: "assets/images/shape.jpg"
    },
    {
            question: "ما هو عمل الأداة المشار إليها في الصورة؟",
            answers: [
                "إدراج مخطط",
                "إدراج SmartArt",
                "إدراج صورة",
                "إدراج 3D Models"
            ],
            correctAnswer: 1,
            image: "assets/images/art.jpg"
    },
    {
            question: "ما هو عمل الأداة المشار إليها في الصورة؟",
            answers: [
                "إدراج صورة",
                "إدراج مخطط",
                "إدراج SmartArt",
                "إدراج 3D Models"
            ],
            correctAnswer: 1,
            image: "assets/images/chart.jpg"
    },
];
    



let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let startTime, endTime;
let shuffledQuestions = [];
let totalQuestions = 0;
let timer;
const timePerQuestion = 120; // عدد الثواني المخصصة لكل سؤال
let timeLeft = timePerQuestion;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    const studentName = document.getElementById("student-name").value.trim();
    const studentGrade = document.getElementById("student-grade").value.trim();
    const questionCount = document.getElementById("question-count").value;

    if (studentName === "" || studentGrade === "") {
        alert("الرجاء إدخال الاسم والصف قبل البدء.");
        return;
    }

    startTime = new Date();
    shuffledQuestions = shuffle([...quizData]);

    // تحديد عدد الأسئلة بناءً على اختيار الطالب
    if (questionCount === "10") {
        shuffledQuestions = shuffledQuestions.slice(0, 10);
    }

    totalQuestions = shuffledQuestions.length;

    document.querySelector('.design-credit').classList.add('hidden');
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    const questionNumberElement = document.getElementById("question-number");
    const questionImageElement = document.getElementById("question-image");

    const questionData = shuffledQuestions[currentQuestionIndex];

    questionNumberElement.innerText = `السؤال ${currentQuestionIndex + 1} من ${totalQuestions}`;
    questionElement.innerText = questionData.question;

    // إخفاء الصورة إذا لم تكن موجودة
    if (questionData.image) {
        questionImageElement.src = questionData.image;
        questionImageElement.style.display = "block";
    } else {
        questionImageElement.style.display = "none";
    }

    const shuffledAnswers = shuffle([...questionData.answers]);

    document.querySelectorAll('.answer-buttons .btn').forEach((button, index) => {
        button.innerText = shuffledAnswers[index];
        button.disabled = false;
        button.style.backgroundColor = "#3498db";
    });

    document.getElementById('next-btn').classList.add('hidden');

    // إعادة ضبط العداد الزمني
    timeLeft = timePerQuestion;
    document.getElementById("time-left").innerText = `${timeLeft} ثانية`;
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000); // تحديث العداد كل ثانية
}

function updateTimer() {
    timeLeft--;
    document.getElementById("time-left").innerText = `${timeLeft} ثانية`;

    if (timeLeft <= 0) {
        clearInterval(timer);
        selectAnswer(null); // إذا انتهى الوقت، يتم الانتقال للسؤال التالي تلقائياً
    }
}

function selectAnswer(index) {
    clearInterval(timer); // إيقاف العداد الزمني عند اختيار الإجابة

    const correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;
    const correctAnswerText = shuffledQuestions[currentQuestionIndex].answers[correctAnswer];

    document.querySelectorAll('.answer-buttons .btn').forEach((button) => {
        button.disabled = true;
    });

    if (index !== null && document.querySelectorAll('.answer-buttons .btn')[index].innerText === correctAnswerText) {
        document.getElementById(`btn${index + 1}`).style.backgroundColor = "green";
        correctAnswers++;
        document.getElementById("correct-sound").play();
    } else {
        if (index !== null) {
            document.getElementById(`btn${index + 1}`).style.backgroundColor = "red";
        }
        document.getElementById("wrong-sound").play();
        document.querySelectorAll('.answer-buttons .btn').forEach((button) => {
            if (button.innerText === correctAnswerText) {
                button.style.backgroundColor = "green";
            }
        });
        wrongAnswers++;
    }

    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < totalQuestions) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    endTime = new Date();
    let timeSpent = Math.floor((endTime - startTime) / 1000);
    let minutes = Math.floor(timeSpent / 60);
    let seconds = timeSpent % 60;

    document.querySelector('.design-credit').classList.remove('hidden');
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");

    document.getElementById("student-info").innerText = `${document.getElementById('student-name').value}, الصف ${document.getElementById('student-grade').value}`;
    document.getElementById("correct-answers").innerText = correctAnswers;
    document.getElementById("wrong-answers").innerText = wrongAnswers;
    document.getElementById("time-spent").innerText = `${minutes} دقيقة و ${seconds} ثانية`;
    document.getElementById("final-score").innerText = `${(correctAnswers / totalQuestions) * 100}%`;
}
