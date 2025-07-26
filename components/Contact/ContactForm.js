import React from "react";

const ContactForm = () => {
  return (
    <>
      <form action="#" className="rbt-profile-row rbt-default-form row row--15">
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="firstname1">Nom</label>
            <input id="firstname1" type="text" placeholder="Nom" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="lastname1">Prénom</label>
            <input id="lastname1" type="text" placeholder="Prénom" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="username1">Nom d'utilisateur</label>
            <input id="username1" type="text" placeholder="Nom d'utilisateur" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="phonenumber1">Numéro de téléphone</label>
            <input id="phonenumber1" type="tel" placeholder="06 00 00 00 00" />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="bio1">Message</label>
            <textarea
              id="bio1"
              cols="20"
              rows="5"
              placeholder="Votre message"
            ></textarea>
          </div>
        </div>
        <div className="col-12 mt--20">
          <div className="form-group mb--0">
            <a className="btn-default" style={{ cursor: 'pointer' }}>
              Envoyer
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
