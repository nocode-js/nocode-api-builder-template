import {
  VariableDefinitions,
  createDefinitionModel,
  createRootModel,
  variableDefinitionsValueModel
} from 'sequential-workflow-editor-model';
import { Definition } from 'sequential-workflow-model';
import { httpRequestStepModel } from './httpRequestModel';
import { readJsonNodeStepModel } from './readJsonNodeStepModel';

export interface EndpointDefinition extends Definition {
  properties: {
    inputs: VariableDefinitions;
    internals: VariableDefinitions;
    outputs: VariableDefinitions;
  };
}

export const rootModel = createRootModel<EndpointDefinition>(root => {
  root.property('inputs').value(variableDefinitionsValueModel({})).label('Input variables');
  root.property('internals').value(variableDefinitionsValueModel({})).label('Internal variables');
  root.property('outputs').value(variableDefinitionsValueModel({})).label('Output variables');
});

export const endpointDefinitionModel = createDefinitionModel<EndpointDefinition>(model => {
  model.valueTypes(['string', 'number']);
  model.root(rootModel);
  model.steps([httpRequestStepModel, readJsonNodeStepModel]);
});
