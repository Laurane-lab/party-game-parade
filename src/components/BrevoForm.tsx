import React, { useState } from 'react';

const BrevoForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const action = form.action;

    try {
      // We use fetch to submit the form in the background
      // 'no-cors' mode is used because the Brevo endpoint may not return the correct CORS headers,
      // which would block the request in the browser. With 'no-cors', we can't inspect the response,
      // so we optimistically assume success.
      await fetch(action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      setStatus('success');
    } catch (error) {
      console.error('Form submission error', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="sib-form" style={{ textAlign: 'center', backgroundColor: 'transparent' }}>
        <div id="success-message" className="sib-form-message-panel" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#085229', backgroundColor: '#e7faf0', borderRadius: '3px', borderColor: '#13ce66', maxWidth: '350px', margin: '0 auto', padding: '16px' }}>
          <div className="sib-form-message-panel__text sib-form-message-panel__text--center" style={{display: 'flex', alignItems: 'center'}}>
            <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon" style={{width: '20px', marginRight: '10px'}}>
              <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
            </svg>
            <span className="sib-form-message-panel__inner-text">
              Tu es bien inscrit !
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="sib-form" style={{ textAlign: 'center', backgroundColor: 'transparent' }}>
        <div id="error-message" className="sib-form-message-panel" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949', maxWidth: '350px', margin: '0 auto', padding: '16px' }}>
          <div className="sib-form-message-panel__text sib-form-message-panel__text--center" style={{display: 'flex', alignItems: 'center'}}>
            <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon" style={{width: '20px', marginRight: '10px'}}>
              <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
            </svg>
            <span className="sib-form-message-panel__inner-text">
              Nous n'avons pas pu confirmer ton inscription. Réessaye plus tard.
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sib-form" style={{ textAlign: 'center', backgroundColor: 'transparent' }}>
      <div id="sib-form-container" className="sib-form-container">
        <div id="sib-container" className="sib-container--medium sib-container--vertical" style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,1)', maxWidth: '100%', borderRadius: '3px', borderWidth: '1px', borderColor: 'hsl(var(--border))', borderStyle: 'solid', direction: 'ltr' }}>
          <form id="sib-form" method="POST" action="https://361787f9.sibforms.com/serve/MUIFACiBIMpb5KO4CZuuu7KprviwFPd45y_ASI3j-WgQaNLeFeLOxWLvAkHfDovNkhLeXND-K3qLsTKygtqZ_PHYoTokGRNGvYaGY4mcLJVX3jSozdFp3Im8bgLzxQRnMgGChfAvSgj4R_USXXTA74p0MHZXaLEEBL82BmQHe0uvC5V6zcwdwsWS2Bf63t_o23a2WrYH0ROh6MR6" data-type="subscription" onSubmit={handleSubmit}>
            <div style={{ padding: '8px 0' }}>
              <div className="sib-form-block" style={{ fontSize: '32px', textAlign: 'left', fontWeight: 700, fontFamily: 'Helvetica, sans-serif', color: 'hsl(var(--primary))', backgroundColor: 'transparent' }}>
                <p>Plus de jeux !</p>
              </div>
            </div>
            <div style={{ padding: '8px 0' }}>
              <div className="sib-input sib-form-block">
                <div className="form__entry entry_block">
                  <div className="form__label-row ">
                    <label className="entry__label" style={{ fontWeight: 700, textAlign: 'left', fontSize: '16px', fontFamily: 'Helvetica, sans-serif', color: 'hsl(var(--foreground))' }} htmlFor="EMAIL" data-required="*">Tu veux recevoir un des jeux payants maintenant ? Donne ton mail !</label>
                    <div className="entry__field">
                      <input className="input " type="text" id="EMAIL" name="EMAIL" autoComplete="off" placeholder="aperololo@gmail.com" data-required="true" required />
                    </div>
                  </div>
                  <label className="entry__error entry__error--primary" style={{ fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949' }}>
                  </label>
                  <label className="entry__specification" style={{ fontSize: '12px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#8390A4' }}>
                    Renseigne ton adresse email pour le recevoir.
                  </label>
                </div>
              </div>
            </div>
            <div style={{ padding: '8px 0' }}>
              <div className="sib-form-block" style={{ textAlign: 'left' }}>
                <button className="sib-form-block__button sib-form-block__button-with-loader" style={{ fontSize: '16px', textAlign: 'left', fontWeight: 700, fontFamily: 'Helvetica, sans-serif', color: 'hsl(var(--primary-foreground))', backgroundColor: 'hsl(var(--primary))', borderRadius: '3px', borderWidth: '0px' }} form="sib-form" type="submit" disabled={status === 'submitting'}>
                  <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512" style={{ display: status === 'submitting' ? 'inline-block' : 'none', width: '16px', verticalAlign: 'middle', marginRight: '8px' }}>
                    <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                  </svg>
                  {status === 'submitting' ? 'INSCRIPTION...' : 'JE LE VEUX'}
                </button>
              </div>
            </div>
            <input type="text" name="email_address_check" value="" className="input--hidden" />
            <input type="hidden" name="locale" value="fr" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BrevoForm;