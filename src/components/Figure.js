const Figure = () => {
  return (
    <>
      {/* Base Rod */}
      <svg width="500" height="500">
        <g transform="translate(-170 -120)">
          <rect width="5" height="60" transform="translate(310 185) rotate(45)"/>
          <rect width="5" height="300" transform="translate(520 470) rotate(90)"/>
          <rect width="5" height="290" transform="translate(267 185)"/>
          <rect width="190" height="5" transform="translate(267 183)"/>
          <rect width="5" height="50" transform="translate(452 183)"/>

          {/* Head */}
          <g transform="translate(427 230)" fill="none" stroke="#000" strokeWidth="5">
            <circle cx="27.5" cy="27.5" r="27.5" stroke="none"/>
            <circle cx="27.5" cy="27.5" r="25" fill="none"/>
          </g>
          {/* Body */}
          <rect width="5" height="75" transform="translate(452 281)"/>
          {/* Arms */}
          <rect width="5" height="56" transform="translate(452 281) rotate(45)"/>
          <rect width="5" height="56" transform="translate(452 284) rotate(-45)"/>
          {/* Legs */}
          <rect width="5" height="75" transform="translate(452 350) rotate(45)"/>
          <rect width="5" height="75" transform="translate(452 353) rotate(-45)"/>
        </g>
      </svg>
    </>
  );
}

export default Figure