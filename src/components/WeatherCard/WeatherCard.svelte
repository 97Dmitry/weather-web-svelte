<script lang="ts">
  export let cityName: string;
  export let currentDegrees: number;
  export let weatherAbout: string;
</script>

<div class="root dayBackground">
  <div class="weatherInfoBlock">
    <div class="currentDegrees">{currentDegrees}°</div>
    <div class="weatherInfoBlockRight">
      <div class="weatherAbout">{weatherAbout}</div>
      <div class="cityNameBlock">
        <div class="cityNameBlockCity">
          {cityName}
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .root {
    width: 360px;
    height: 640px;
    padding: 40px 14px;

    border-radius: 45px;
  }

  .dayBackground {
    background: linear-gradient(180deg, rgba(28, 153, 223, 0.57) 2.08%, rgba(50, 181, 255, 0.1482) 81.77%);
  }

  .cityNameBlock {
    display: flex;
    align-items: center;

    height: max-content;

    border-radius: 10px;
    padding: 10px;

    background: rgba(254, 254, 255, 0.3);
    mix-blend-mode: normal;

    &City {
      font-size: 20px;
      line-height: 23px;
      color: #ffffff;
    }
  }

  .currentDegrees {
    font-size: 64px;
    line-height: 75px;
    color: #ffffff;
    margin-right: 8px;
  }

  .weatherInfoBlock {
    display: flex;
    align-items: center;

    &Right {
      padding-left: 8px;
      border-left: 1px #ffffff solid;
    }
  }

  .weatherAbout {
    font-size: 36px;
    line-height: 42px;
    color: #ffffff;
  }
</style>
