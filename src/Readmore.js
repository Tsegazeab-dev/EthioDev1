import { useState } from "react";
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 348) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...Read more" : " Show less"}
      </span>
    </p>
  );
};

const Content = () => {
  return (
    <div className="container">
      <h2>
        <ReadMore>
          Lemlem school was established in 1996 the school has three campuses;
          in Addis Ababa, Axum, Adwa. Currently the school has more than 153
          teaching, administrative and line staff. They are dedicated in
          providing quality education in an environment which emphasize on
          self-discipline, academic excellence, creativity and pleasant social
          communications. The school`s primary objective is to provide
          standardized and quality education to the nearby community with
          minimal fee and for free for those who cannot afford to pay the
          monthly fee. Currently, the school is rendering the service for very
          minimal fee. Moreover the school is teaching female students for free
          in three campuses. Since its establishment the school has been
          gradually growing in size and in capital. The number of students was
          only 45 in the year of establishment and currently has increased to
          more than 1700 students. The quality of education and the service it
          provides has also been improved considerably through these years. In
          addition, in collaboration with different NGOs and individuals the
          school has helped three students to get medical assistance abroad.
        </ReadMore>
      </h2>
    </div>
  );
};

export default Content;
