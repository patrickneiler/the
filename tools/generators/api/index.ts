import {
  formatFiles,
  generateFiles,
  getProjects,
  names,
  Tree,
} from '@nrwl/devkit';
import * as path from 'path';
import { ApiSchema } from './schema';

export default async function (host: Tree, schema: ApiSchema) {
  // read project from workspace.json / angular.json
  const project = getProjects(host).get(schema.projectName);

  // generate interfaces into app/my-app-name/lib/src/interfaces
  let targetPath;
  if (project?.sourceRoot) {
    targetPath = path.join(project.sourceRoot);
  }

  // read templates from tools/generators/interface/templates
  const templatePath = 'tools/generators/api/templates';

  // generate different name variations for substitutions
  const interfaceNames = names(schema.name);

  const substitutions = {
    // remove __tmpl__ from file endings
    moduleName: schema.projectName,
    templ: '',
    // make the different name variants available as substitutions
    ...interfaceNames,
  };

  // generate the files from the templatePath into the targetPath
  generateFiles(host, templatePath, targetPath, substitutions);

  // format all files which were created / updated in this schematic
  await formatFiles(host);
}
