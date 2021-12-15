import {
  ensureNxProject,
  runPackageManagerInstall,
} from '@nrwl/nx-plugin/testing';

beforeEach(() => {
  ensureNxProject('@nrwl/expo', 'build/packages/expo');
  runPackageManagerInstall();
});
