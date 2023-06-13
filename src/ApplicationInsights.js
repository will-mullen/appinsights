// AppInsights.js
import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js'
import { globalHistory } from "@reach/router"

const reactPlugin = new ReactPlugin();
const ai = new ApplicationInsights({
    config: {
        instrumentationKey: "145e9976-5240-4aff-918e-182500eff0b8",
        extensions: [reactPlugin],
        extensionConfig: {
            [reactPlugin.identifier]: { history: globalHistory }
        }
    }
})
ai.loadAppInsights()
// ai.addTelemetryInitializer((envelope) => {
// if (envelope.data.baseType === 'RemoteDependencyData'){
//     const transaction = envelope.data; 
//     console.log('End to End Transaction:', transaction);
// }
// return true;
// });
ai.trackPageView();


export default (Component) => withAITracking(reactPlugin, Component)
export const appInsights = ai.appInsights