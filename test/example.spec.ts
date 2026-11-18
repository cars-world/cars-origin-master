// @license
// Copyright (c) 2026 Rljson
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { describe, it } from 'vitest';

import { carsOriginMasterVersion } from '../src/cars_origin_master_version';
import { example } from '../src/example';

import { expectGolden } from './setup/goldens';

describe('example', () => {
  it('prints the greeting', async () => {
    const logMessages: string[] = [];
    const log = console.log;
    console.log = (message: string) => logMessages.push(message);
    example();
    console.log = log;

    // The golden file names the version as <version>, so a release keeps it
    const output = logMessages
      .join('\n')
      .replaceAll(carsOriginMasterVersion, '<version>');

    await expectGolden('example.log').toBe(output);
  });
});
