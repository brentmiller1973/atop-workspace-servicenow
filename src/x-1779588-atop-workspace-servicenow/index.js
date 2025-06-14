import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => (
	<div id="responsePanel">
		<h1>Atop workspace</h1>
		<p>This is an example of a bare-bones component.</p>
		<p>You might want to read the <a href ="https://developer.servicenow.com/dev.do#!/reference/next-experience/latest/ui-framework/getting-started/introduction">documentation</a> on the ServiceNow developer site.</p>
	</div>
);

createCustomElement('x-1779588-atop-workspace-servicenow', {
	renderer: {type: snabbdom},
	view,
	styles
});
