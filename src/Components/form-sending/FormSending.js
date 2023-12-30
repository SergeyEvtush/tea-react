import "./form-sending.css";
import InputBlock from "../inputBlock/InputBlock";
import ButtonBlock from "../button-block/ButtonBlock";
import InputCheckBoxLabel from "../inputCheckBoxLabel/InputCheckBoxLabel";
import { Component } from "react";

class FormSending extends Component {
  render() {
    return (
      <form action="" className="mail-form">
        <div className="sending-block mail-form__send">
          <InputBlock
            inputWraperClass={"sending-block__input"}
            inputType={"mail"}
            inputClass={"mail-input"}
            inputPlaceholder={"name@email.com"}
          />
          <ButtonBlock
            classButtonBlock={"blog__button"}
            classButton={"mail-button"}
            typeBtn={"submit"}
            textBtn={"join"}
          />
        </div>
        <div className="verification-block">
          <InputCheckBoxLabel
            labelClass={"verification-block__text annotation-text"}
            inputClass={"verification-block__input checkbox-input"}
            textLabel={
              "We take your privacy seriously and are committed to protecting your personal information. By subscribing to our mailing list, you are consenting to receive periodic emails from us about our products, promotions, and other tea-related information."
            }
          />
        </div>
      </form>
    );
  }
}
export default FormSending;
