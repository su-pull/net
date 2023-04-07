import css from 'styled-jsx/css';

const styles = css`
  .search_box {
    position: relative;
    width: 520px;

    padding: 0 8px;
    margin: auto;
  }

  .search_container {
    box-shadow: 0 0 2px -0.4px var(--color-shadow);
    border: solid 0.4px var(--color-border);
    border-radius: 2px;
    width: fit-content;
    margin-left: 28px;
  }

  @media screen and (max-width: 739.98px) {
    .search_box {
      position: relative;
      top: 0px;
      width: 100%;
      left: 10%;
    }

    .search_container {
    width: 80%;
  }
  
  }
`;

export default styles;
