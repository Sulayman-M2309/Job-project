
const Statistics = () => {
    return (
        <div>
           What is useState?

রিঅ্যাক্ট হুক হচ্ছে জাভাস্ক্রিপ্ট ফাংশন যা রিয়েক্টের বিশেষ কিছু ফিচার ব্যবহার করতে দেয়। রিঅ্যাক্টে, আপনি যখন কোনো অ্যাপ্লিকেশন তৈরি করেন, তখন আপনার ডেটা পরিবর্তন হওয়ার সাথে সাথে আপনার UI আপডেট করার প্রয়োজন হয়। useState হুকটি হলো এমনই একটি হুক যা রিঅ্যাক্টের কোনো কম্পোনেন্টে স্টেট বা অবস্থা সংরক্ষণের জন্য ব্যবহৃত হয়।

State কি?


রিঅ্যাক্টে, স্টেট হলো এমন এক ধরণের তথ্য যা কোনো কম্পোনেন্টের অবস্থা বা আচরণকে নির্দেশ করে। এই তথ্য সময়ের সাথে সাথে পরিবর্তন হতে পারে, যেমন ইউজারের ইন্টারঅ্যাকশনের ফলে বা অন্যান্য ডেটার উপর নির্ভর করে। স্টেটের পরিবর্তনের ফলে রিঅ্যাক্ট কম্পোনেন্টটিকে re-render করে, যাতে UI সর্বদা সামঞ্জস্যপূর্ণ থাকে।

একটি সহজ উদাহরণ হিসেবে কল্পনা করুন আপনার রয়েছে একটি লাইট সুইচ। এই সুইচটি লাইটের অবস্থা (চালু বা বন্ধ) নির্দেশ করে। ঠিক যেমন সুইচ ফ্লিপ করলে লাইটের অবস্থা পরিবর্তন হয়, তেমনি স্টেটের পরিবর্তন হলে রিঅ্যাক্টের UI আপডেট হয়।


কেন আমরা useState ব্যবহার করি?

a. Dynamic UI তৈরি: যেসব কম্পোনেন্টের ইউজারের ইন্টার‌্যাকশন বা সময়ের সাথে ডেটা পরিবর্তন হয়, সেগুলোর জন্য useState হুক খুবই গুরুত্বপূর্ণ। এটি কম্পোনেন্টগুলোকে রি-রেন্ডার করে, যাতে UI সবসময় সামঞ্জস্যপূর্ণ থাকে।
b. স্টেট ম্যানেজমেন্ট: useState কম্পোনেন্ট লেভেলে স্টেট ম্যানেজ করার একটি সহজ উপায় দেয়। এর মানে হল, কম্পোনেন্টগুলো তাদের নিজস্ব পরিবর্তনশীল ডেটা রাখতে পারে।

useState এর Structure:

const [currentState, updateState] = useState(initialValue);

এখানে -
1. currentState: দিয়ে বোঝায় কম্পোনেন্টের বর্তমান স্টেটের মান
2. updateState: হলো একটি ফাংশন যা দিয়ে বর্তমান স্টেট পরিবর্তন করা যায়
3. initialValue: হলো স্টেটের প্রাথমিক মান (initial value)


useState কে একটা বাক্স হিসেবে কল্পনা করুন। এই বাক্সে আপনি ভেতরে কিছু রাখতে পারেন (স্টেট)। তবে এই বাক্সের অনন্য বৈশিষ্ট্য হলো, যখন আপনি বাক্সের ভেতরে কিছু পরিবর্তন করেন, রিঅ্যাক্ট বুঝতে পারে যে পরিবর্তন হয়েছে এবং আপনার কম্পোনেন্টটিকে রি-রেন্ডার করে যেন UI আপডেটেড থাকে।

useState কিভাবে ব্যবহার করা হয়?


উদাহরণ:

{/* 


import {useState} from 'react';



function Counter(){

  const [count, setCount] = useState(0);// initial state 0



  return(

    <div>

      <p>count: {count}</p>

      <button onClick={()=> setCount(count+1)}>Increase</button>

    </div>

  );

} */}



এখানে কি ঘটছে:

useState(0): এখানে, আমরা useState হুকটি ব্যবহার করছি এবং এটিকে একটি প্রাথমিক মান 0 দিয়ে কল করছি। useState একটি অ্যারে ফেরত দেয়। অ্যারের প্রথম উপাদানটি হল বর্তমান কাউন্ট (count) এবং দ্বিতীয় উপাদানটি হল আপডেটার ফাংশন (setCount)।
count: এই ভেরিয়েবলে আমরা অ্যারের প্রথম উপাদানটি, অর্থাৎ বর্তমান কাউন্টের মান সংরক্ষণ করছি।
setCount: এই ভেরিয়েবলে আমরা অ্যারের দ্বিতীয় উপাদান, অর্থাৎ আপডেটার ফাংশনটি সংরক্ষণ করছি।
onClick={() => setCount(count + 1)}: বাটনে ক্লিক করার সময়, এই অ্যানোনিমাস ফাংশনটি চালু হয়। এটি setCount ফাংশনকে কল করে, যা কাউন্টের মান 1 বাড়িয়ে দেয়।
এই উদাহরণে, যখন আপনি বাটনে ক্লিক করবেন, তখন setCount ফাংশনটি কল হবে এবং কাউন্টের মান 1 বাড়িয়ে দেবে।


স্ট্রিং আপডেট করা:


{/* 
import React from 'react';



function StringExample(){

  const [message, setMessage]= useState('Hello World!');



  const handleClick=()=>{

    setMessage('Goodbye!');

  };



  return(

    <div>

      <p> Current Message: {message}</p>

      <button onClick = {handleClick}>Change Message</button>

    </div>

  );

}



export default StringExample; */}





ব্যাখ্যা:

i. useState হুকটি ব্যবহার করে আমরা message নামের একটি স্টেট ভেরিয়েবল তৈরি করছি, যার প্রাথমিক মান "Hello World!"।
ii. setMessage ফাংশনটি স্টেটের মান আপডেট করতে ব্যবহৃত হয়।
ii. handleClick ফাংশনটি বাটনে ক্লিক করার সময় চালু হয় এবং এটি setMessage ফাংশনকে কল করে স্টেটের মানকে "Goodbye!" এ আপডেট করে।



{/* Object আপডেট করা:





import React,{useState} from 'react';



function ObjectExample(){

  const [user,setUser] = useState({name:'John Doe',age:30});



  const incrementAge =()=>{

    setUser({...user,age:user.age+1});// Update age property

  };



  return(

    <div>

      <p>Name: {user.name}, Age: {user.age}</p>

      <button onClick ={incrementAge}>Increment Age</button>

    </div>

  );

} */}



export default ObjectExample;




ব্যাখ্যা:

1. useState হুকটি ব্যবহার করে, user নামের একটি স্টেট ভেরিয়েবল তৈরি করা হয়। এই ভেরিয়েবলের প্রাথমিক মান একটি অবজেক্ট:  name: 'John Doe', age: 30 ।
2. setUser ...user, age: user.age + 1 ;: setUser ফাংশনটি user স্টেটের মান আপডেট করতে ব্যবহৃত হয়। incrementAge ফাংশনে, setUser ফাংশনটি কল করা হয়।  স্প্রেড অপারেটরটি পুরোনো user অবজেক্টের ওপর কাজ করে এবং নতুন মান age: user.age + 1 যোগ করে একটি নতুন অবজেক্ট তৈরি করে। এই ক্ষেত্রে, এটি পুরোনো মানগুলো name বজায় রাখে এবং শুধুমাত্র age প্রপার্টির মান 1 বাড়িয়ে দেয়।


Array আপডেট করা:
{/* 



import React,{useState} from 'react';



function ArrayExample(){

  const [numbers,setNumbers]= useState([1,2,3]);// Initial state with some numbers



  const addNumber=()=>{

    setNumbers([...numbers,numbers.length+1]);// Add new element

  };



  return(

    <div>

      <ul>

        {numbers.map((number)=>(

          <li key={number}>{number}</li>

        ))}

      </ul>

      <button onClick={addNumber}>Add Number</button>

    </div>

  );

} */}



export default ArrayExample;



ব্যাখ্যা:
1. useState হুকটি ব্যবহার করে, numbers নামের একটি স্টেট ভেরিয়েবল তৈরি করা হয়।
numbers ভেরিয়েবলের প্রাথমিক মান একটি অ্যারে [1, 2, 3]। এটি কম্পোনেন্টের অবস্থাকে নির্দেশ করে, যা এই ক্ষেত্রে বর্তমান তালিকায় থাকা উপাদানগুলি।
2. setNumbers([...numbers, numbers.length + 1]);: addNumber ফাংশনে, setNumbers ফাংশনটি কল করা হয়। [...] স্প্রেড অপারেটরটি numbers অ্যারের একটি কপি তৈরি করে।
3. numbers.length + 1 অংশটি নতুন উপাদানের মান নির্ধারণ করে, যা বর্তমান তালিকার উপাদানের সংখ্যা (length) + 1 এর সমান। এই দুটি অংশ একত্রিত হয়ে একটি নতুন অ্যারে তৈরি করে, যা পুরোনো উপাদানগুলির সাথে নতুন উপাদানটিও ধারণ করে।

useState এর উপকারিতা:

1. সরল এবং সহজবোধ্য: useState অ্যাপ্লিকেশনের স্টেট বুঝতে ও ব্যবস্থাপনা করতে সরল উপায় দেয়।
2. কম্পোনেন্ট রি-ইউজেবল: স্টেটের ব্যবস্থাপনা কম্পোনেন্ট লেভেলে রাখার মাধ্যমে useState কম্পোনেন্টদের আরো রি-ইউজেবল করে তোলে।
3. UI কে dynamic করে: স্টেটের ওপর ভিত্তি করে UI আপডেট করায় সাহায্য করে, যা ইন্টার‌্যাক্টিভ ওয়েব অ্যাপ্লিকেশন তৈরির মূল চাবিকাঠি।


        </div>
    );
};

export default Statistics;