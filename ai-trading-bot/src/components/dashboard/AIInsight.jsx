function AIInsight({ message }) {

  return (

    <div className="
      bg-blue-50
      border
      border-blue-100
      rounded-3xl
      p-6
    ">

      <h2 className="
        text-2xl
        font-bold
        mb-3
      ">
        AI Insight
      </h2>

      <p className="text-gray-700">
        {message}
      </p>

    </div>
  );
}

export default AIInsight;