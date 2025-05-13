import "../../App.css";

export default function ImageSection() {
  return (
    <div className="image-container">
      <div className="image-group">
        <img
          src="https://storage.googleapis.com/a1aa/image/92a9a7a7-b1f2-4380-5b59-32cb2a47c391.jpg"
          alt="Smiling elderly man holding a guitar, wearing a light shirt"
          className="image-small"
          width={100}
          height={100}
          loading="lazy"
        />
        <span className="label-green">Now available</span>
      </div>

      <div className="image-group">
        <img
          src="https://storage.googleapis.com/a1aa/image/4b224332-77a7-4364-5e83-1136da6bd3a1.jpg"
          alt="Man repairing an appliance in a kitchen, wearing a red shirt and apron"
          className="image-medium"
          width={120}
          height={100}
          loading="lazy"
        />
        <div className="label-blue">Repair</div>
      </div>

      <div className="image-group">
        <div className="label-black-bold">
          <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>4.8
          stars
        </div>
        <img
          src="https://storage.googleapis.com/a1aa/image/7e23ae39-915d-447c-d20b-b1c3be0b5487.jpg"
          alt="Worker in yellow helmet using a tool on a wall, wearing a blue plaid shirt"
          className="image-large"
          width={140}
          height={120}
          loading="lazy"
        />
      </div>
    </div>
  );
}
