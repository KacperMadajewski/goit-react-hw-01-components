export const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

          <ul>
              {stats.map(stat => (
                  <li key={stat.id}>
                      <span>{stat.label}</span>
                      <span>{ stat.percentage }</span>
                  </li>
              ))}

          </ul>



      {/* <ul class="stat-list">
        <li class="item">
          <span class="label">.docx</span>
          <span class="percentage">4%</span>
        </li>
        <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage">14%</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">41%</span>
        </li>
        <li class="item">
          <span class="label">.mp4</span>
          <span class="percentage">12%</span>
        </li>
      </ul> */}
    </section>
  );
};
