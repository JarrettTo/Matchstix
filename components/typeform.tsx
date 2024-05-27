import { Widget } from '@typeform/embed-react'
import { useEffect } from 'react'

export const FormComponent = () => {
  useEffect(() => {
    const loadTallyScript = () => {
      const scriptSrc = "https://tally.so/widgets/embed.js";
      const scriptExists = document.querySelector(`script[src="${scriptSrc}"]`);

      const initializeTally = () => {
        //@ts-ignore
        if (window.Tally) {
          //@ts-ignore
          window.Tally.loadEmbeds();
        } else {
          document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe) => {
            //@ts-ignore
            iframe.src = iframe.dataset.tallySrc!;
          });
        }
      };

      if (!scriptExists) {
        const script = document.createElement('script');
        script.src = scriptSrc;
        script.onload = initializeTally;
        script.onerror = initializeTally;
        document.body.appendChild(script);
      } else {
        initializeTally();
      }
    };

    loadTallyScript();
  }, []);
  return (
    <>
      <iframe
        data-tally-src="https://tally.so/embed/mR4GNl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="90%"
        height="90%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Join Matchstix Beta Now!"
      ></iframe>
    
      
    </>
  )
}
