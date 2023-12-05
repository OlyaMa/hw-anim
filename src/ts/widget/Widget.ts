export class Widget {
  container = document.body;
  constructor() {
    this.createWidget();
    this.createStyles();
    this.addEventListeners();
  }

  createWidget() {
    const widget = document.createElement("div");
    widget.classList.add("widget");
    widget.innerHTML = `
      <div class="form">
        <form class="feedback">
          <div class="cancel_widget_btn_container">
            <h2>Напишите нам</h2>
          <button id="cancel_widget_btn">X</button>
          </div>
          <textarea class="feedback-text"></textarea>
          <button id="submit-feedback-btn" type="submit">Отправить</button>
        </form>
      </div>
      <button id="enable_widget_btn" type="button"></button>`;

    this.container.appendChild(widget);
  }

  createStyles() {
    const style = document.createElement("style");
    document.head.appendChild(style);
    const sheet: CSSStyleSheet | null = style.sheet;
    sheet?.insertRule(
      `
      .widget { 
        position: fixed; 
        bottom: 2rem;
        right: 2rem; 
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        }`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      #enable_widget_btn { 
        background-color: #dc3545;
        border: 0;
        border-radius: 50%;
        width: 50px; 
        height: 50px;
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.2);
        }`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      .form { 
        width: 240px; 
        height: 280px;
        position: absolute;
        display: flex;
        visibility: hidden;
        padding: 15px;
        flex-wrap: wrap;
        right: 1.45rem; 
        bottom: 1.45rem;
        border: 1px solid black;
        border-radius: 3px;
        background-color: white;   
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);
        transition: box-shadow 0.3s ease;     
        }`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      .cancel_widget_btn_container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      #cancel_widget_btn {
        background-color: transparent;
        padding-right: 0;
        border: 0;
      }`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      .form h2 {
        margin: 0;
        padding-bottom: 10px;
      }`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      .feedback-text { width: calc(100% - 5px); height: 69%; border-radius: 10px;}`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      #submit-feedback-btn { width: 100%; padding: 0; height: 12%; margin-top: 10px; border: 0; background-color: lightgray; border-radius: 10px}`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      .hidden {
        animation-name: hide;
        animation-duration: 100ms;
        animation-fill-mode: forwards;
      }`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      .visible {
        animation-name: show;
        animation-duration: 100ms;
        animation-fill-mode: forwards;
      }`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      #enable_widget_btn {
        transform: scale(1);
        transition:
          transform 0.2s,
          box-shadow 0.3s ease;
        transition-timing-function: ease-in-out;
      }`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      #enable_widget_btn:hover {
        transform: scale(1.2);
      }`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      #enable_widget_btn:active {
        transform: scale(1.2);
      }`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      @keyframes hide {
        from {
          opacity: 1;
          transform: scale(1);
        }
      
        to {
          opacity: 0;
          transform: scale(0.8);
        }
      }`,
      sheet.cssRules.length,
    );
    sheet?.insertRule(
      `
      @keyframes show {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
      
        to {
          opacity: 1;
          transform: scale(1);
        }
      }`,
      sheet.cssRules.length,
    );
  }

  addEventListeners() {
    const form = this.container.querySelector(".widget .form") as HTMLElement;
    const enableBtn = this.container.querySelector(
      "#enable_widget_btn",
    ) as HTMLElement;
    const cancelBtn = this.container.querySelector(
      "#cancel_widget_btn",
    ) as HTMLElement;

    const widgetHideHandler = (event: Event) => {
      event.preventDefault();

      form.classList.add("hidden");
      enableBtn.classList.add("visible");
      form.classList.remove("visible");
      enableBtn.classList.remove("hidden");
    };

    const widgetVisibleHandler = (event: Event) => {
      event.preventDefault();

      form.classList.add("visible");
      enableBtn.classList.add("hidden");
      form.classList.remove("hidden");
      enableBtn.classList.remove("visible");
    };

    enableBtn?.addEventListener("click", widgetVisibleHandler);
    cancelBtn?.addEventListener("click", widgetHideHandler);
    form?.addEventListener("animationend", (event) => {
      if (event.animationName === "hide") {
        form.style.visibility = "hidden";
        enableBtn.classList.remove("visible");
      }
    });
    form?.addEventListener("animationstart", (event) => {
      if (event.animationName === "show") {
        form.style.visibility = "visible";
      }
    });
  }
}
