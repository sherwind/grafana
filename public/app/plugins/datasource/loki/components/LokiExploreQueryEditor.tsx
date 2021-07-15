// Libraries
import React, { memo } from 'react';

// Types
import { ExploreQueryFieldProps } from '@grafana/data';
import { LokiDatasource } from '../datasource';
import { LokiQuery, LokiOptions } from '../types';
import { LokiQueryField } from './LokiQueryField';
import { LokiOptionFields } from './LokiOptionFields';

type Props = ExploreQueryFieldProps<LokiDatasource, LokiQuery, LokiOptions>;

export function LokiExploreQueryEditor(props: Props) {
  const { query, data, datasource, history, onChange, onRunQuery } = props;

  return (
    <LokiQueryField
      datasource={datasource}
      query={query}
      onChange={onChange}
      onBlur={() => {}}
      onRunQuery={onRunQuery}
      history={history}
      data={data}
      ExtraFieldElement={
        <LokiOptionFields
          queryType={query.instant ? 'instant' : 'range'}
          lineLimitValue={query?.maxLines?.toString() || ''}
          stepInterval={query.stepInterval || ''}
          stepMode={query.stepMode || 'min'}
          query={query}
          onRunQuery={onRunQuery}
          onChange={onChange}
        />
      }
    />
  );
}

export default memo(LokiExploreQueryEditor);
