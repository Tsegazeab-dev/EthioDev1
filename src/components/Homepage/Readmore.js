import { useState } from "react";
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 500) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...Read more" : " Show less"}
      </span>
    </p>
  );
};

const Content = () => {
  return (
    <div className="container-fluid">
      <h4 className="background">
        <ReadMore>
          Lemlem school was established in 1996. The school has three campuses;
          in Addis Ababa, Axum, Adwa. Currently the school has more than 153
          teaching, administrative and line staff. They are dedicated in
          providing quality education in an environment which emphasize on self
          discipline, academic excellence, creative and pleasant social
          communications. The school's primary objective is to provide
          standardized and quality education to the nearby community with
          minimal fee and for free for those who can not afford to pay the
          monthly fee. Moreover the school is teaching female students fro free
          in the three campuses. Since its establishment the schoolhas been
          gradually growing in size and in capital. The number of students was
          only in the year of establishment and currently has increased to more
          tha 1700 students. The qualityof education and service it provides has
          alsobeen improved considerably throughthese years. In addition, in
          collaboration with different NGOs and individuals the schoolhas helped
          three students to get medical assistance abroad.
        </ReadMore>
      </h4>
    </div>
  );
};

export default Content;
