export default {
    "scalars": [
        1,
        9,
        11,
        12,
        13,
        14,
        16,
        18,
        22,
        31,
        32,
        33,
        35,
        39,
        41,
        43,
        48,
        74,
        79,
        86,
        88,
        89,
        97,
        99,
        105,
        107,
        108,
        121,
        133,
        134,
        168,
        177,
        227,
        230,
        232,
        237,
        238,
        240,
        258,
        260,
        263,
        267,
        268,
        269,
        284,
        291,
        300,
        303,
        309,
        311,
        316,
        318,
        319,
        325,
        352,
        360,
        361,
        363
    ],
    "types": {
        "AccessRule": {
            "disallowed": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ActiveFeatureFlag": {},
        "AdoptionInfo": {
            "adoptionLevel": [
                79
            ],
            "createdAt": [
                35
            ],
            "customer": [
                272
            ],
            "deltaLevel": [
                79
            ],
            "id": [
                86
            ],
            "matchedIcpEmail": [
                263
            ],
            "monthlyEstimatedUsage": [
                79
            ],
            "numConfigFile": [
                89
            ],
            "numCronSchedule": [
                89
            ],
            "numDeploys": [
                89
            ],
            "numEnvs": [
                89
            ],
            "numFailedDeploys": [
                89
            ],
            "numHealthcheck": [
                89
            ],
            "numIconConfig": [
                89
            ],
            "numRegion": [
                89
            ],
            "numReplicas": [
                89
            ],
            "numRootDirectory": [
                89
            ],
            "numSeats": [
                89
            ],
            "numServices": [
                89
            ],
            "numSupportRequests": [
                89
            ],
            "numVariables": [
                89
            ],
            "numWatchPatterns": [
                89
            ],
            "totalCores": [
                79
            ],
            "totalDisk": [
                79
            ],
            "totalNetwork": [
                79
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                263
            ]
        },
        "AggregatedUsage": {
            "measurement": [
                107
            ],
            "tags": [
                109
            ],
            "value": [
                79
            ],
            "__typename": [
                263
            ]
        },
        "AllDomains": {
            "customDomains": [
                23
            ],
            "serviceDomains": [
                246
            ],
            "__typename": [
                263
            ]
        },
        "ApiToken": {
            "displayToken": [
                263
            ],
            "id": [
                86
            ],
            "name": [
                263
            ],
            "teamId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ApiTokenCreateInput": {
            "name": [
                263
            ],
            "teamId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "BanReasonHistory": {
            "actor": [
                323
            ],
            "banReason": [
                263
            ],
            "createdAt": [
                35
            ],
            "id": [
                86
            ],
            "__typename": [
                263
            ]
        },
        "BaseEnvironmentOverrideInput": {
            "baseEnvironmentOverrideId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "BigInt": {},
        "BillingPeriod": {
            "end": [
                35
            ],
            "start": [
                35
            ],
            "__typename": [
                263
            ]
        },
        "Boolean": {},
        "Builder": {},
        "CDNProvider": {},
        "CanvasConfig": {},
        "CertificatePublicData": {
            "domainNames": [
                263
            ],
            "expiresAt": [
                35
            ],
            "fingerprintSha256": [
                263
            ],
            "issuedAt": [
                35
            ],
            "keyType": [
                99
            ],
            "__typename": [
                263
            ]
        },
        "CertificateStatus": {},
        "CnameCheck": {
            "link": [
                263
            ],
            "message": [
                263
            ],
            "status": [
                18
            ],
            "__typename": [
                263
            ]
        },
        "CnameCheckStatus": {},
        "Container": {
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "environment": [
                55
            ],
            "environmentId": [
                263
            ],
            "id": [
                86
            ],
            "migratedAt": [
                35
            ],
            "plugin": [
                128
            ],
            "pluginId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "Credit": {
            "amount": [
                79
            ],
            "createdAt": [
                35
            ],
            "customerId": [
                263
            ],
            "id": [
                86
            ],
            "memo": [
                263
            ],
            "type": [
                22
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                263
            ]
        },
        "CreditTransferMetrics": {
            "creditTransferAvg": [
                79
            ],
            "creditTransferCount": [
                89
            ],
            "creditTransferSum": [
                89
            ],
            "__typename": [
                263
            ]
        },
        "CreditType": {},
        "CustomDomain": {
            "cnameCheck": [
                17
            ],
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "domain": [
                263
            ],
            "environmentId": [
                263
            ],
            "id": [
                86
            ],
            "projectId": [
                263
            ],
            "serviceId": [
                263
            ],
            "status": [
                25
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                263
            ]
        },
        "CustomDomainCreateInput": {
            "domain": [
                263
            ],
            "environmentId": [
                263
            ],
            "projectId": [
                263
            ],
            "serviceId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "CustomDomainStatus": {
            "cdnProvider": [
                13
            ],
            "certificateStatus": [
                16
            ],
            "certificates": [
                15
            ],
            "dnsRecords": [
                34
            ],
            "__typename": [
                263
            ]
        },
        "Customer": {
            "appliedCredits": [
                79
            ],
            "billingEmail": [
                263
            ],
            "billingPeriod": [
                10
            ],
            "creditBalance": [
                79
            ],
            "credits": [
                27,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "defaultPaymentMethod": [
                124
            ],
            "defaultPaymentMethodId": [
                263
            ],
            "id": [
                86
            ],
            "invoices": [
                29
            ],
            "isPrepaying": [
                11
            ],
            "isTrialing": [
                11
            ],
            "isUsageSubscriber": [
                11
            ],
            "isWithdrawingToCredits": [
                11
            ],
            "planLimitOverride": [
                126
            ],
            "remainingUsageCreditBalance": [
                79
            ],
            "state": [
                269
            ],
            "stripeCustomerId": [
                263
            ],
            "subscriptions": [
                30
            ],
            "teamId": [
                263
            ],
            "usageLimit": [
                320
            ],
            "userId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "CustomerCreditsConnection": {
            "edges": [
                28
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "CustomerCreditsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                20
            ],
            "__typename": [
                263
            ]
        },
        "CustomerInvoice": {
            "amountPaid": [
                79
            ],
            "hostedURL": [
                263
            ],
            "invoiceId": [
                263
            ],
            "items": [
                266
            ],
            "paymentIntentStatus": [
                263
            ],
            "pdfURL": [
                263
            ],
            "periodEnd": [
                263
            ],
            "periodStart": [
                263
            ],
            "status": [
                263
            ],
            "subscriptionId": [
                263
            ],
            "total": [
                89
            ],
            "__typename": [
                263
            ]
        },
        "CustomerSubscription": {
            "billingCycleAnchor": [
                35
            ],
            "cancelAt": [
                263
            ],
            "cancelAtPeriodEnd": [
                11
            ],
            "couponId": [
                263
            ],
            "discounts": [
                265
            ],
            "id": [
                263
            ],
            "items": [
                266
            ],
            "latestInvoiceId": [
                263
            ],
            "nextInvoiceCurrentTotal": [
                89
            ],
            "nextInvoiceDate": [
                263
            ],
            "status": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "DNSRecordPurpose": {},
        "DNSRecordStatus": {},
        "DNSRecordType": {},
        "DNSRecords": {
            "currentValue": [
                263
            ],
            "fqdn": [
                263
            ],
            "hostlabel": [
                263
            ],
            "purpose": [
                31
            ],
            "recordType": [
                33
            ],
            "requiredValue": [
                263
            ],
            "status": [
                32
            ],
            "zone": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "DateTime": {},
        "Deployment": {
            "canRedeploy": [
                11
            ],
            "canRollback": [
                11
            ],
            "createdAt": [
                35
            ],
            "creator": [
                323
            ],
            "environment": [
                55
            ],
            "environmentId": [
                263
            ],
            "id": [
                86
            ],
            "meta": [
                41
            ],
            "projectId": [
                263
            ],
            "service": [
                241
            ],
            "serviceId": [
                263
            ],
            "snapshotId": [
                263
            ],
            "staticUrl": [
                263
            ],
            "status": [
                43
            ],
            "suggestAddServiceDomain": [
                11
            ],
            "updatedAt": [
                35
            ],
            "url": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "DeploymentEvent": {
            "completedAt": [
                35
            ],
            "createdAt": [
                35
            ],
            "id": [
                86
            ],
            "payload": [
                38
            ],
            "step": [
                39
            ],
            "__typename": [
                263
            ]
        },
        "DeploymentEventPayload": {
            "error": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "DeploymentEventStep": {},
        "DeploymentListInput": {
            "environmentId": [
                263
            ],
            "includeDeleted": [
                11
            ],
            "projectId": [
                263
            ],
            "serviceId": [
                263
            ],
            "status": [
                44
            ],
            "__typename": [
                263
            ]
        },
        "DeploymentMeta": {},
        "DeploymentSnapshot": {
            "createdAt": [
                35
            ],
            "id": [
                86
            ],
            "updatedAt": [
                35
            ],
            "variables": [
                258
            ],
            "__typename": [
                263
            ]
        },
        "DeploymentStatus": {},
        "DeploymentStatusInput": {
            "in": [
                43
            ],
            "notIn": [
                43
            ],
            "__typename": [
                263
            ]
        },
        "DeploymentTrigger": {
            "baseEnvironmentOverrideId": [
                263
            ],
            "branch": [
                263
            ],
            "checkSuites": [
                11
            ],
            "environmentId": [
                263
            ],
            "id": [
                86
            ],
            "projectId": [
                263
            ],
            "provider": [
                263
            ],
            "repository": [
                263
            ],
            "serviceId": [
                263
            ],
            "validCheckSuites": [
                89
            ],
            "__typename": [
                263
            ]
        },
        "DeploymentTriggerCreateInput": {
            "branch": [
                263
            ],
            "checkSuites": [
                11
            ],
            "environmentId": [
                263
            ],
            "projectId": [
                263
            ],
            "provider": [
                263
            ],
            "repository": [
                263
            ],
            "rootDirectory": [
                263
            ],
            "serviceId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "DeploymentTriggerUpdateInput": {
            "branch": [
                263
            ],
            "checkSuites": [
                11
            ],
            "repository": [
                263
            ],
            "rootDirectory": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "DisplayConfig": {},
        "Domain": {
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "domain": [
                263
            ],
            "environmentId": [
                263
            ],
            "id": [
                86
            ],
            "projectId": [
                263
            ],
            "serviceId": [
                263
            ],
            "updatedAt": [
                35
            ],
            "on_CustomDomain": [
                23
            ],
            "on_ServiceDomain": [
                246
            ],
            "__typename": [
                263
            ]
        },
        "DomainAvailable": {
            "available": [
                11
            ],
            "message": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "DomainWithStatus": {
            "cdnProvider": [
                13
            ],
            "certificateStatus": [
                16
            ],
            "certificates": [
                15
            ],
            "dnsRecords": [
                34
            ],
            "domain": [
                49
            ],
            "__typename": [
                263
            ]
        },
        "EgressGateway": {
            "ipv4": [
                263
            ],
            "region": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "EgressGatewayCreateInput": {
            "environmentId": [
                263
            ],
            "serviceId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "EgressGatewayServiceTargetInput": {
            "environmentId": [
                263
            ],
            "serviceId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "Environment": {
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "deploymentTriggers": [
                57,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "deployments": [
                59,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "id": [
                86
            ],
            "isEphemeral": [
                11
            ],
            "meta": [
                61
            ],
            "name": [
                263
            ],
            "projectId": [
                263
            ],
            "serviceInstances": [
                63,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "sourceEnvironment": [
                55
            ],
            "unmergedChangesCount": [
                89
            ],
            "updatedAt": [
                35
            ],
            "variables": [
                66,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "volumeInstances": [
                68,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "__typename": [
                263
            ]
        },
        "EnvironmentCreateInput": {
            "ephemeral": [
                11
            ],
            "name": [
                263
            ],
            "projectId": [
                263
            ],
            "skipInitialDeploys": [
                11
            ],
            "sourceEnvironmentId": [
                263
            ],
            "stageInitialChanges": [
                11
            ],
            "__typename": [
                263
            ]
        },
        "EnvironmentDeploymentTriggersConnection": {
            "edges": [
                58
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "EnvironmentDeploymentTriggersConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                45
            ],
            "__typename": [
                263
            ]
        },
        "EnvironmentDeploymentsConnection": {
            "edges": [
                60
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "EnvironmentDeploymentsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                36
            ],
            "__typename": [
                263
            ]
        },
        "EnvironmentMeta": {
            "baseBranch": [
                263
            ],
            "branch": [
                263
            ],
            "prCommentId": [
                89
            ],
            "prNumber": [
                89
            ],
            "prRepo": [
                263
            ],
            "prTitle": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "EnvironmentRenameInput": {
            "name": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "EnvironmentServiceInstancesConnection": {
            "edges": [
                64
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "EnvironmentServiceInstancesConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                249
            ],
            "__typename": [
                263
            ]
        },
        "EnvironmentTriggersDeployInput": {
            "environmentId": [
                263
            ],
            "projectId": [
                263
            ],
            "serviceId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "EnvironmentVariablesConnection": {
            "edges": [
                67
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "EnvironmentVariablesConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                341
            ],
            "__typename": [
                263
            ]
        },
        "EnvironmentVolumeInstancesConnection": {
            "edges": [
                69
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "EnvironmentVolumeInstancesConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                350
            ],
            "__typename": [
                263
            ]
        },
        "EstimatedUsage": {
            "estimatedValue": [
                79
            ],
            "measurement": [
                107
            ],
            "projectId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "Event": {
            "action": [
                263
            ],
            "createdAt": [
                35
            ],
            "environment": [
                55
            ],
            "environmentId": [
                263
            ],
            "id": [
                86
            ],
            "object": [
                263
            ],
            "payload": [
                97
            ],
            "project": [
                144
            ],
            "projectId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "EventBatchTrackInput": {
            "events": [
                76
            ],
            "__typename": [
                263
            ]
        },
        "EventFilterInput": {
            "action": [
                75
            ],
            "object": [
                75
            ],
            "__typename": [
                263
            ]
        },
        "EventProperties": {},
        "EventStringListFilter": {
            "in": [
                263
            ],
            "notIn": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "EventTrackInput": {
            "eventName": [
                263
            ],
            "properties": [
                74
            ],
            "ts": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ExplicitOwnerInput": {
            "id": [
                263
            ],
            "type": [
                237
            ],
            "__typename": [
                263
            ]
        },
        "FeatureFlagToggleInput": {
            "flag": [
                1
            ],
            "__typename": [
                263
            ]
        },
        "Float": {},
        "GitHubBranch": {
            "name": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "GitHubRepo": {
            "defaultBranch": [
                263
            ],
            "fullName": [
                263
            ],
            "id": [
                89
            ],
            "installationId": [
                263
            ],
            "isPrivate": [
                11
            ],
            "name": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "GitHubRepoDeployInput": {
            "branch": [
                263
            ],
            "projectId": [
                263
            ],
            "repo": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "GitHubRepoUpdateInput": {
            "environmentId": [
                263
            ],
            "projectId": [
                263
            ],
            "serviceId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "HerokuApp": {
            "id": [
                263
            ],
            "name": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "HerokuImportVariablesInput": {
            "environmentId": [
                263
            ],
            "herokuAppId": [
                263
            ],
            "projectId": [
                263
            ],
            "serviceId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ID": {},
        "Incident": {
            "id": [
                263
            ],
            "message": [
                263
            ],
            "status": [
                88
            ],
            "url": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "IncidentStatus": {},
        "Int": {},
        "Integration": {
            "config": [
                97
            ],
            "id": [
                86
            ],
            "name": [
                263
            ],
            "projectId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "IntegrationAuth": {
            "id": [
                86
            ],
            "integrations": [
                92,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "provider": [
                263
            ],
            "providerId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "IntegrationAuthIntegrationsConnection": {
            "edges": [
                93
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "IntegrationAuthIntegrationsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                90
            ],
            "__typename": [
                263
            ]
        },
        "IntegrationCreateInput": {
            "config": [
                97
            ],
            "integrationAuthId": [
                263
            ],
            "name": [
                263
            ],
            "projectId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "IntegrationUpdateInput": {
            "config": [
                97
            ],
            "integrationAuthId": [
                263
            ],
            "name": [
                263
            ],
            "projectId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "InviteCode": {
            "code": [
                263
            ],
            "createdAt": [
                35
            ],
            "id": [
                86
            ],
            "project": [
                144
            ],
            "projectId": [
                263
            ],
            "role": [
                168
            ],
            "__typename": [
                263
            ]
        },
        "JSON": {},
        "JobApplicationCreateInput": {
            "email": [
                263
            ],
            "jobId": [
                263
            ],
            "name": [
                263
            ],
            "why": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "KeyType": {},
        "Log": {
            "attributes": [
                101
            ],
            "message": [
                263
            ],
            "severity": [
                263
            ],
            "tags": [
                102
            ],
            "timestamp": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "LogAttribute": {
            "key": [
                263
            ],
            "value": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "LogTags": {
            "deploymentId": [
                263
            ],
            "deploymentInstanceId": [
                263
            ],
            "environmentId": [
                263
            ],
            "pluginId": [
                263
            ],
            "projectId": [
                263
            ],
            "serviceId": [
                263
            ],
            "snapshotId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "LoginSessionAuthInput": {
            "code": [
                263
            ],
            "hostname": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "Maintenance": {
            "id": [
                263
            ],
            "message": [
                263
            ],
            "status": [
                105
            ],
            "url": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "MaintenanceStatus": {},
        "Metric": {
            "ts": [
                89
            ],
            "value": [
                79
            ],
            "__typename": [
                263
            ]
        },
        "MetricMeasurement": {},
        "MetricTag": {},
        "MetricTags": {
            "deploymentId": [
                263
            ],
            "environmentId": [
                263
            ],
            "pluginId": [
                263
            ],
            "projectId": [
                263
            ],
            "serviceId": [
                263
            ],
            "volumeId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "MetricsResult": {
            "measurement": [
                107
            ],
            "tags": [
                109
            ],
            "values": [
                106
            ],
            "__typename": [
                263
            ]
        },
        "MissingCommandAlertInput": {
            "page": [
                263
            ],
            "text": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "Mutation": {
            "apiTokenCreate": [
                263,
                {
                    "input": [
                        6,
                        "ApiTokenCreateInput!"
                    ]
                }
            ],
            "apiTokenDelete": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "baseEnvironmentOverride": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        8,
                        "BaseEnvironmentOverrideInput!"
                    ]
                }
            ],
            "customDomainCreate": [
                23,
                {
                    "input": [
                        24,
                        "CustomDomainCreateInput!"
                    ]
                }
            ],
            "customDomainDelete": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "customerMigrateToHobbyPlan": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "customerTogglePayoutsToCredits": [
                11,
                {
                    "customerId": [
                        263,
                        "String!"
                    ],
                    "input": [
                        364,
                        "customerTogglePayoutsToCreditsInput!"
                    ]
                }
            ],
            "deploymentCancel": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "deploymentRedeploy": [
                36,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "usePreviousImageTag": [
                        11
                    ]
                }
            ],
            "deploymentRemove": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "deploymentRestart": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "deploymentRollback": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggerCreate": [
                45,
                {
                    "input": [
                        46,
                        "DeploymentTriggerCreateInput!"
                    ]
                }
            ],
            "deploymentTriggerDelete": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggerUpdate": [
                45,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        47,
                        "DeploymentTriggerUpdateInput!"
                    ]
                }
            ],
            "egressGatewayAssociationCreate": [
                52,
                {
                    "input": [
                        53,
                        "EgressGatewayCreateInput!"
                    ]
                }
            ],
            "egressGatewayAssociationsClear": [
                11,
                {
                    "input": [
                        54,
                        "EgressGatewayServiceTargetInput!"
                    ]
                }
            ],
            "emailChangeConfirm": [
                11,
                {
                    "nonce": [
                        263,
                        "String!"
                    ]
                }
            ],
            "emailChangeInitiate": [
                11,
                {
                    "newEmail": [
                        263,
                        "String!"
                    ]
                }
            ],
            "environmentCreate": [
                55,
                {
                    "input": [
                        56,
                        "EnvironmentCreateInput!"
                    ]
                }
            ],
            "environmentDelete": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "environmentRename": [
                55,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        62,
                        "EnvironmentRenameInput!"
                    ]
                }
            ],
            "environmentTriggersDeploy": [
                11,
                {
                    "input": [
                        65,
                        "EnvironmentTriggersDeployInput!"
                    ]
                }
            ],
            "eventBatchTrack": [
                11,
                {
                    "input": [
                        72,
                        "EventBatchTrackInput!"
                    ]
                }
            ],
            "eventTrack": [
                11,
                {
                    "input": [
                        76,
                        "EventTrackInput!"
                    ]
                }
            ],
            "fairUseAgree": [
                11,
                {
                    "agree": [
                        11,
                        "Boolean!"
                    ]
                }
            ],
            "featureFlagAdd": [
                11,
                {
                    "input": [
                        78,
                        "FeatureFlagToggleInput!"
                    ]
                }
            ],
            "featureFlagRemove": [
                11,
                {
                    "input": [
                        78,
                        "FeatureFlagToggleInput!"
                    ]
                }
            ],
            "githubRepoDeploy": [
                11,
                {
                    "input": [
                        82,
                        "GitHubRepoDeployInput!"
                    ]
                }
            ],
            "githubRepoUpdate": [
                11,
                {
                    "input": [
                        83,
                        "GitHubRepoUpdateInput!"
                    ]
                }
            ],
            "herokuImportVariables": [
                89,
                {
                    "input": [
                        85,
                        "HerokuImportVariablesInput!"
                    ]
                }
            ],
            "integrationCreate": [
                90,
                {
                    "input": [
                        94,
                        "IntegrationCreateInput!"
                    ]
                }
            ],
            "integrationDelete": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "integrationUpdate": [
                90,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        95,
                        "IntegrationUpdateInput!"
                    ]
                }
            ],
            "inviteCodeUse": [
                144,
                {
                    "code": [
                        263,
                        "String!"
                    ]
                }
            ],
            "jobApplicationCreate": [
                11,
                {
                    "input": [
                        98,
                        "JobApplicationCreateInput!"
                    ],
                    "resume": [
                        316,
                        "Upload!"
                    ]
                }
            ],
            "loginSessionAuth": [
                11,
                {
                    "input": [
                        103,
                        "LoginSessionAuthInput!"
                    ]
                }
            ],
            "loginSessionCancel": [
                11,
                {
                    "code": [
                        263,
                        "String!"
                    ]
                }
            ],
            "loginSessionConsume": [
                263,
                {
                    "code": [
                        263,
                        "String!"
                    ]
                }
            ],
            "loginSessionCreate": [
                263
            ],
            "loginSessionVerify": [
                11,
                {
                    "code": [
                        263,
                        "String!"
                    ]
                }
            ],
            "logout": [
                11
            ],
            "missingCommandAlert": [
                11,
                {
                    "input": [
                        111,
                        "MissingCommandAlertInput!"
                    ]
                }
            ],
            "observabilityDashboardCreate": [
                11,
                {
                    "input": [
                        115,
                        "ObservabilityDashboardCreateInput!"
                    ]
                }
            ],
            "observabilityDashboardReset": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "observabilityDashboardUpdate": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        122,
                        "[ObservabilityDashboardUpdateInput!]!"
                    ]
                }
            ],
            "pluginCreate": [
                128,
                {
                    "input": [
                        131,
                        "PluginCreateInput!"
                    ]
                }
            ],
            "pluginDelete": [
                11,
                {
                    "environmentId": [
                        263
                    ],
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "pluginReset": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        235,
                        "ResetPluginInput!"
                    ]
                }
            ],
            "pluginResetCredentials": [
                263,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        234,
                        "ResetPluginCredentialsInput!"
                    ]
                }
            ],
            "pluginRestart": [
                128,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        132,
                        "PluginRestartInput!"
                    ]
                }
            ],
            "pluginStart": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        132,
                        "PluginRestartInput!"
                    ]
                }
            ],
            "pluginUpdate": [
                128,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        135,
                        "PluginUpdateInput!"
                    ]
                }
            ],
            "preferencesUpdate": [
                138,
                {
                    "input": [
                        139,
                        "PreferencesUpdateData!"
                    ]
                }
            ],
            "privateNetworkCreateOrGet": [
                140,
                {
                    "input": [
                        141,
                        "PrivateNetworkCreateOrGetInput!"
                    ]
                }
            ],
            "privateNetworkEndpointCreateOrGet": [
                142,
                {
                    "input": [
                        143,
                        "PrivateNetworkEndpointCreateOrGetInput!"
                    ]
                }
            ],
            "privateNetworkEndpointDelete": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "privateNetworkEndpointRename": [
                11,
                {
                    "dnsName": [
                        263,
                        "String!"
                    ],
                    "id": [
                        263,
                        "String!"
                    ],
                    "privateNetworkId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "privateNetworksForEnvironmentDelete": [
                11,
                {
                    "environmentId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "projectClaim": [
                144,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "projectCreate": [
                144,
                {
                    "input": [
                        145,
                        "ProjectCreateInput!"
                    ]
                }
            ],
            "projectDelete": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "projectInvitationAccept": [
                162,
                {
                    "code": [
                        263,
                        "String!"
                    ]
                }
            ],
            "projectInvitationCreate": [
                155,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        158,
                        "ProjectInvitee!"
                    ]
                }
            ],
            "projectInvitationDelete": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "projectInvitationResend": [
                155,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "projectInviteUser": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        157,
                        "ProjectInviteUserInput!"
                    ]
                }
            ],
            "projectLeave": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "projectMemberRemove": [
                159,
                {
                    "input": [
                        160,
                        "ProjectMemberRemoveInput!"
                    ]
                }
            ],
            "projectMemberUpdate": [
                159,
                {
                    "input": [
                        161,
                        "ProjectMemberUpdateInput!"
                    ]
                }
            ],
            "projectTokenCreate": [
                263,
                {
                    "input": [
                        172,
                        "ProjectTokenCreateInput!"
                    ]
                }
            ],
            "projectTokenDelete": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "projectTransferConfirm": [
                11,
                {
                    "input": [
                        173,
                        "ProjectTransferConfirmInput!"
                    ]
                }
            ],
            "projectTransferInitiate": [
                11,
                {
                    "input": [
                        174,
                        "ProjectTransferInitiateInput!"
                    ]
                }
            ],
            "projectTransferToTeam": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        175,
                        "ProjectTransferToTeamInput!"
                    ]
                }
            ],
            "projectTransferToUser": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "projectUpdate": [
                144,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        176,
                        "ProjectUpdateInput!"
                    ]
                }
            ],
            "providerAuthRemove": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "recoveryCodeGenerate": [
                223
            ],
            "recoveryCodeValidate": [
                11,
                {
                    "input": [
                        222,
                        "RecoveryCodeValidateInput!"
                    ]
                }
            ],
            "referralInfoUpdate": [
                224,
                {
                    "input": [
                        225,
                        "ReferralInfoUpdateInput!"
                    ]
                }
            ],
            "sendCommunityThreadNotificationEmail": [
                11,
                {
                    "input": [
                        239,
                        "SendCommunityThreadNotificationEmailInput!"
                    ]
                }
            ],
            "serviceConnect": [
                241,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        242,
                        "ServiceConnectInput!"
                    ]
                }
            ],
            "serviceCreate": [
                241,
                {
                    "input": [
                        243,
                        "ServiceCreateInput!"
                    ]
                }
            ],
            "serviceDelete": [
                11,
                {
                    "environmentId": [
                        263
                    ],
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "serviceDisconnect": [
                241,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "serviceDomainCreate": [
                246,
                {
                    "input": [
                        247,
                        "ServiceDomainCreateInput!"
                    ]
                }
            ],
            "serviceDomainDelete": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "serviceDomainUpdate": [
                11,
                {
                    "input": [
                        248,
                        "ServiceDomainUpdateInput!"
                    ]
                }
            ],
            "serviceInstanceDeploy": [
                11,
                {
                    "environmentId": [
                        263,
                        "String!"
                    ],
                    "serviceId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceRedeploy": [
                11,
                {
                    "environmentId": [
                        263,
                        "String!"
                    ],
                    "serviceId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceUpdate": [
                11,
                {
                    "environmentId": [
                        263
                    ],
                    "input": [
                        250,
                        "ServiceInstanceUpdateInput!"
                    ],
                    "serviceId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "serviceRemoveUpstreamUrl": [
                241,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "serviceUpdate": [
                241,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        257,
                        "ServiceUpdateInput!"
                    ]
                }
            ],
            "sessionDelete": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "sharedVariableConfigure": [
                341,
                {
                    "input": [
                        261,
                        "SharedVariableConfigureInput!"
                    ]
                }
            ],
            "tcpProxyCreate": [
                270,
                {
                    "input": [
                        271,
                        "TCPProxyCreateInput!"
                    ]
                }
            ],
            "tcpProxyDelete": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "teamBulkProjectTransfer": [
                11,
                {
                    "input": [
                        273,
                        "TeamBulkProjectTransferInput!"
                    ]
                }
            ],
            "teamCreate": [
                272,
                {
                    "input": [
                        276,
                        "TeamCreateInput!"
                    ]
                }
            ],
            "teamCreateAndSubscribe": [
                275,
                {
                    "input": [
                        274,
                        "TeamCreateAndSubscribeInput!"
                    ]
                }
            ],
            "teamDelete": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "teamInviteCodeCreate": [
                263,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        278,
                        "TeamInviteCodeCreateInput!"
                    ]
                }
            ],
            "teamInviteCodeUse": [
                272,
                {
                    "code": [
                        263,
                        "String!"
                    ]
                }
            ],
            "teamLeave": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "teamPermissionChange": [
                11,
                {
                    "input": [
                        281,
                        "TeamPermissionChangeInput!"
                    ]
                }
            ],
            "teamUpdate": [
                272,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        285,
                        "TeamUpdateInput!"
                    ]
                }
            ],
            "teamUserInvite": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        286,
                        "TeamUserInviteInput!"
                    ]
                }
            ],
            "teamUserRemove": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        287,
                        "TeamUserRemoveInput!"
                    ]
                }
            ],
            "telemetrySend": [
                11,
                {
                    "input": [
                        288,
                        "TelemetrySendInput!"
                    ]
                }
            ],
            "templateClone": [
                289,
                {
                    "input": [
                        290,
                        "TemplateCloneInput!"
                    ]
                }
            ],
            "templateCreate": [
                289,
                {
                    "input": [
                        292,
                        "TemplateCreateInput!"
                    ]
                }
            ],
            "templateDelete": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        294,
                        "TemplateDeleteInput!"
                    ]
                }
            ],
            "templateDeploy": [
                296,
                {
                    "input": [
                        295,
                        "TemplateDeployInput!"
                    ]
                }
            ],
            "templateGenerate": [
                289,
                {
                    "input": [
                        298,
                        "TemplateGenerateInput!"
                    ]
                }
            ],
            "templateMaybeUnsetCommunityThreadSlug": [
                11,
                {
                    "communityThreadSlug": [
                        263,
                        "String!"
                    ]
                }
            ],
            "templatePublish": [
                289,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        301,
                        "TemplatePublishInput!"
                    ]
                }
            ],
            "templateServiceSourceEject": [
                11,
                {
                    "input": [
                        305,
                        "TemplateServiceSourceEjectInput!"
                    ]
                }
            ],
            "templateUnpublish": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "templateUpdate": [
                289,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        310,
                        "TemplateUpdateInput!"
                    ]
                }
            ],
            "twoFactorInfoCreate": [
                223,
                {
                    "input": [
                        313,
                        "TwoFactorInfoCreateInput!"
                    ]
                }
            ],
            "twoFactorInfoDelete": [
                11
            ],
            "twoFactorInfoSecret": [
                314
            ],
            "twoFactorInfoValidate": [
                11,
                {
                    "input": [
                        315,
                        "TwoFactorInfoValidateInput!"
                    ]
                }
            ],
            "upsertSlackChannelForTeam": [
                11,
                {
                    "teamId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "usageLimitRemove": [
                11,
                {
                    "input": [
                        321,
                        "UsageLimitRemoveInput!"
                    ]
                }
            ],
            "usageLimitSet": [
                11,
                {
                    "input": [
                        322,
                        "UsageLimitSetInput!"
                    ]
                }
            ],
            "userBetaLeave": [
                11
            ],
            "userDelete": [
                11
            ],
            "userDiscordDisconnect": [
                11
            ],
            "userFlagsRemove": [
                11,
                {
                    "input": [
                        326,
                        "UserFlagsRemoveInput!"
                    ]
                }
            ],
            "userFlagsSet": [
                11,
                {
                    "input": [
                        327,
                        "UserFlagsSetInput!"
                    ]
                }
            ],
            "userProfileUpdate": [
                11,
                {
                    "input": [
                        333,
                        "UserProfileUpdateInput!"
                    ]
                }
            ],
            "userTermsUpdate": [
                323
            ],
            "userUpdate": [
                323,
                {
                    "input": [
                        340,
                        "UserUpdateInput!"
                    ]
                }
            ],
            "variableCollectionUpsert": [
                11,
                {
                    "input": [
                        342,
                        "VariableCollectionUpsertInput!"
                    ]
                }
            ],
            "variableDelete": [
                11,
                {
                    "input": [
                        343,
                        "VariableDeleteInput!"
                    ]
                }
            ],
            "variableUpsert": [
                11,
                {
                    "input": [
                        344,
                        "VariableUpsertInput!"
                    ]
                }
            ],
            "volumeCreate": [
                348,
                {
                    "input": [
                        349,
                        "VolumeCreateInput!"
                    ]
                }
            ],
            "volumeDelete": [
                11,
                {
                    "volumeId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceUpdate": [
                11,
                {
                    "environmentId": [
                        263
                    ],
                    "input": [
                        351,
                        "VolumeInstanceUpdateInput!"
                    ],
                    "volumeId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "volumeUpdate": [
                348,
                {
                    "input": [
                        353,
                        "VolumeUpdateInput!"
                    ],
                    "volumeId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "webhookCreate": [
                180,
                {
                    "input": [
                        356,
                        "WebhookCreateInput!"
                    ]
                }
            ],
            "webhookDelete": [
                11,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "webhookUpdate": [
                180,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "input": [
                        357,
                        "WebhookUpdateInput!"
                    ]
                }
            ],
            "__typename": [
                263
            ]
        },
        "Node": {
            "id": [
                86
            ],
            "on_AdoptionInfo": [
                2
            ],
            "on_ApiToken": [
                5
            ],
            "on_BanReasonHistory": [
                7
            ],
            "on_Container": [
                19
            ],
            "on_Credit": [
                20
            ],
            "on_Customer": [
                26
            ],
            "on_Deployment": [
                36
            ],
            "on_DeploymentEvent": [
                37
            ],
            "on_DeploymentSnapshot": [
                42
            ],
            "on_DeploymentTrigger": [
                45
            ],
            "on_Environment": [
                55
            ],
            "on_Event": [
                71
            ],
            "on_Integration": [
                90
            ],
            "on_IntegrationAuth": [
                91
            ],
            "on_InviteCode": [
                96
            ],
            "on_ObservabilityDashboard": [
                114
            ],
            "on_ObservabilityDashboardItem": [
                116
            ],
            "on_ObservabilityDashboardItemInstance": [
                120
            ],
            "on_PlanLimitOverride": [
                126
            ],
            "on_Plugin": [
                128
            ],
            "on_Preferences": [
                138
            ],
            "on_Project": [
                144
            ],
            "on_ProjectPermission": [
                162
            ],
            "on_ProjectToken": [
                171
            ],
            "on_ProjectWebhook": [
                180
            ],
            "on_ProviderAuth": [
                183
            ],
            "on_ReferralInfo": [
                224
            ],
            "on_RefundRequest": [
                229
            ],
            "on_Service": [
                241
            ],
            "on_ServiceInstance": [
                249
            ],
            "on_Session": [
                259
            ],
            "on_Team": [
                272
            ],
            "on_TeamPermission": [
                280
            ],
            "on_Template": [
                289
            ],
            "on_TemplateService": [
                302
            ],
            "on_UsageAnomaly": [
                317
            ],
            "on_UsageLimit": [
                320
            ],
            "on_User": [
                323
            ],
            "on_Variable": [
                341
            ],
            "on_Volume": [
                348
            ],
            "on_VolumeInstance": [
                350
            ],
            "on_Withdrawal": [
                358
            ],
            "on_WithdrawalAccount": [
                359
            ],
            "__typename": [
                263
            ]
        },
        "ObservabilityDashboard": {
            "id": [
                86
            ],
            "items": [
                120
            ],
            "__typename": [
                263
            ]
        },
        "ObservabilityDashboardCreateInput": {
            "environmentId": [
                263
            ],
            "items": [
                122
            ],
            "__typename": [
                263
            ]
        },
        "ObservabilityDashboardItem": {
            "config": [
                117
            ],
            "description": [
                263
            ],
            "id": [
                86
            ],
            "name": [
                263
            ],
            "type": [
                121
            ],
            "__typename": [
                263
            ]
        },
        "ObservabilityDashboardItemConfig": {
            "logsFilter": [
                263
            ],
            "measurements": [
                107
            ],
            "projectUsageProperties": [
                177
            ],
            "resourceIds": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ObservabilityDashboardItemConfigInput": {
            "logsFilter": [
                263
            ],
            "measurements": [
                107
            ],
            "projectUsageProperties": [
                177
            ],
            "resourceIds": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ObservabilityDashboardItemCreateInput": {
            "config": [
                118
            ],
            "description": [
                263
            ],
            "id": [
                263
            ],
            "name": [
                263
            ],
            "type": [
                121
            ],
            "__typename": [
                263
            ]
        },
        "ObservabilityDashboardItemInstance": {
            "dashboardItem": [
                116
            ],
            "displayConfig": [
                48
            ],
            "id": [
                86
            ],
            "__typename": [
                263
            ]
        },
        "ObservabilityDashboardItemType": {},
        "ObservabilityDashboardUpdateInput": {
            "dashboardItem": [
                119
            ],
            "displayConfig": [
                48
            ],
            "id": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "PageInfo": {
            "endCursor": [
                263
            ],
            "hasNextPage": [
                11
            ],
            "hasPreviousPage": [
                11
            ],
            "startCursor": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "PaymentMethod": {
            "card": [
                125
            ],
            "id": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "PaymentMethodCard": {
            "brand": [
                263
            ],
            "country": [
                263
            ],
            "last4": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "PlanLimitOverride": {
            "config": [
                267
            ],
            "id": [
                86
            ],
            "__typename": [
                263
            ]
        },
        "PlatformStatus": {
            "incident": [
                87
            ],
            "isStable": [
                11
            ],
            "maintenance": [
                104
            ],
            "__typename": [
                263
            ]
        },
        "Plugin": {
            "containers": [
                129,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "deprecatedAt": [
                35
            ],
            "friendlyName": [
                263
            ],
            "id": [
                86
            ],
            "logsEnabled": [
                11
            ],
            "migrationDatabaseServiceId": [
                263
            ],
            "name": [
                134
            ],
            "project": [
                144
            ],
            "status": [
                133
            ],
            "variables": [
                136,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "__typename": [
                263
            ]
        },
        "PluginContainersConnection": {
            "edges": [
                130
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "PluginContainersConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                19
            ],
            "__typename": [
                263
            ]
        },
        "PluginCreateInput": {
            "environmentId": [
                263
            ],
            "friendlyName": [
                263
            ],
            "name": [
                263
            ],
            "projectId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "PluginRestartInput": {
            "environmentId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "PluginStatus": {},
        "PluginType": {},
        "PluginUpdateInput": {
            "friendlyName": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "PluginVariablesConnection": {
            "edges": [
                137
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "PluginVariablesConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                341
            ],
            "__typename": [
                263
            ]
        },
        "Preferences": {
            "buildFailedEmail": [
                11
            ],
            "changelogEmail": [
                11
            ],
            "communityEmail": [
                11
            ],
            "deployCrashedEmail": [
                11
            ],
            "ephemeralEnvironmentEmail": [
                11
            ],
            "id": [
                86
            ],
            "marketingEmail": [
                11
            ],
            "subprocessorUpdatesEmail": [
                11
            ],
            "usageEmail": [
                11
            ],
            "__typename": [
                263
            ]
        },
        "PreferencesUpdateData": {
            "buildFailedEmail": [
                11
            ],
            "changelogEmail": [
                11
            ],
            "communityEmail": [
                11
            ],
            "deployCrashedEmail": [
                11
            ],
            "ephemeralEnvironmentEmail": [
                11
            ],
            "marketingEmail": [
                11
            ],
            "subprocessorUpdatesEmail": [
                11
            ],
            "token": [
                263
            ],
            "usageEmail": [
                11
            ],
            "__typename": [
                263
            ]
        },
        "PrivateNetwork": {
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "dnsName": [
                263
            ],
            "environmentId": [
                263
            ],
            "name": [
                263
            ],
            "networkId": [
                9
            ],
            "projectId": [
                263
            ],
            "publicId": [
                263
            ],
            "tags": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "PrivateNetworkCreateOrGetInput": {
            "environmentId": [
                263
            ],
            "name": [
                263
            ],
            "projectId": [
                263
            ],
            "tags": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "PrivateNetworkEndpoint": {
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "dnsName": [
                263
            ],
            "privateIps": [
                263
            ],
            "publicId": [
                263
            ],
            "serviceInstanceId": [
                263
            ],
            "tags": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "PrivateNetworkEndpointCreateOrGetInput": {
            "environmentId": [
                263
            ],
            "privateNetworkId": [
                263
            ],
            "serviceId": [
                263
            ],
            "serviceName": [
                263
            ],
            "tags": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "Project": {
            "baseEnvironment": [
                55
            ],
            "baseEnvironmentId": [
                263
            ],
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "deploymentTriggers": [
                147,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "deployments": [
                149,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "description": [
                263
            ],
            "environments": [
                151,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "expiredAt": [
                35
            ],
            "groups": [
                153,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "id": [
                86
            ],
            "isPublic": [
                11
            ],
            "isTempProject": [
                11
            ],
            "members": [
                159
            ],
            "name": [
                263
            ],
            "plugins": [
                163,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "prDeploys": [
                11
            ],
            "prForks": [
                11
            ],
            "projectPermissions": [
                165,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "services": [
                169,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "subscriptionPlanLimit": [
                267
            ],
            "subscriptionType": [
                268
            ],
            "team": [
                272
            ],
            "teamId": [
                263
            ],
            "updatedAt": [
                35
            ],
            "volumes": [
                178,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "webhooks": [
                181,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "__typename": [
                263
            ]
        },
        "ProjectCreateInput": {
            "defaultEnvironmentName": [
                263
            ],
            "description": [
                263
            ],
            "isPublic": [
                11
            ],
            "name": [
                263
            ],
            "plugins": [
                263
            ],
            "prDeploys": [
                11
            ],
            "repo": [
                146
            ],
            "teamId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ProjectCreateRepo": {
            "branch": [
                263
            ],
            "fullRepoName": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ProjectDeploymentTriggersConnection": {
            "edges": [
                148
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "ProjectDeploymentTriggersConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                45
            ],
            "__typename": [
                263
            ]
        },
        "ProjectDeploymentsConnection": {
            "edges": [
                150
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "ProjectDeploymentsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                36
            ],
            "__typename": [
                263
            ]
        },
        "ProjectEnvironmentsConnection": {
            "edges": [
                152
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "ProjectEnvironmentsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                55
            ],
            "__typename": [
                263
            ]
        },
        "ProjectGroupsConnection": {
            "edges": [
                154
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "ProjectGroupsConnectionEdge": {
            "cursor": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ProjectInvitation": {
            "email": [
                263
            ],
            "expiresAt": [
                35
            ],
            "id": [
                86
            ],
            "inviter": [
                156
            ],
            "isExpired": [
                11
            ],
            "project": [
                184
            ],
            "__typename": [
                263
            ]
        },
        "ProjectInvitationInviter": {
            "email": [
                263
            ],
            "name": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ProjectInviteUserInput": {
            "email": [
                263
            ],
            "link": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ProjectInvitee": {
            "email": [
                263
            ],
            "role": [
                168
            ],
            "__typename": [
                263
            ]
        },
        "ProjectMember": {
            "avatar": [
                263
            ],
            "email": [
                263
            ],
            "id": [
                263
            ],
            "name": [
                263
            ],
            "role": [
                168
            ],
            "__typename": [
                263
            ]
        },
        "ProjectMemberRemoveInput": {
            "projectId": [
                263
            ],
            "userId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ProjectMemberUpdateInput": {
            "projectId": [
                263
            ],
            "role": [
                168
            ],
            "userId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ProjectPermission": {
            "id": [
                86
            ],
            "projectId": [
                263
            ],
            "role": [
                168
            ],
            "userId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ProjectPluginsConnection": {
            "edges": [
                164
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "ProjectPluginsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                128
            ],
            "__typename": [
                263
            ]
        },
        "ProjectProjectPermissionsConnection": {
            "edges": [
                166
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "ProjectProjectPermissionsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                162
            ],
            "__typename": [
                263
            ]
        },
        "ProjectResourceAccess": {
            "customDomain": [
                0
            ],
            "databaseDeployment": [
                0
            ],
            "deployment": [
                0
            ],
            "environment": [
                0
            ],
            "plugin": [
                0
            ],
            "__typename": [
                263
            ]
        },
        "ProjectRole": {},
        "ProjectServicesConnection": {
            "edges": [
                170
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "ProjectServicesConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                241
            ],
            "__typename": [
                263
            ]
        },
        "ProjectToken": {
            "createdAt": [
                35
            ],
            "displayToken": [
                263
            ],
            "environment": [
                55
            ],
            "environmentId": [
                263
            ],
            "id": [
                86
            ],
            "name": [
                263
            ],
            "project": [
                144
            ],
            "projectId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ProjectTokenCreateInput": {
            "environmentId": [
                263
            ],
            "name": [
                263
            ],
            "projectId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ProjectTransferConfirmInput": {
            "ownershipTransferId": [
                263
            ],
            "projectId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ProjectTransferInitiateInput": {
            "memberId": [
                263
            ],
            "projectId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ProjectTransferToTeamInput": {
            "teamId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ProjectUpdateInput": {
            "baseEnvironmentId": [
                263
            ],
            "description": [
                263
            ],
            "isPublic": [
                11
            ],
            "name": [
                263
            ],
            "prDeploys": [
                11
            ],
            "prForks": [
                11
            ],
            "__typename": [
                263
            ]
        },
        "ProjectUsageProperty": {},
        "ProjectVolumesConnection": {
            "edges": [
                179
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "ProjectVolumesConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                348
            ],
            "__typename": [
                263
            ]
        },
        "ProjectWebhook": {
            "id": [
                86
            ],
            "lastStatus": [
                89
            ],
            "projectId": [
                263
            ],
            "url": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ProjectWebhooksConnection": {
            "edges": [
                182
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "ProjectWebhooksConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                180
            ],
            "__typename": [
                263
            ]
        },
        "ProviderAuth": {
            "email": [
                263
            ],
            "id": [
                86
            ],
            "metadata": [
                97
            ],
            "provider": [
                263
            ],
            "userId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "PublicProjectInformation": {
            "id": [
                86
            ],
            "name": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "PublicProjectInvitation": {
            "on_InviteCode": [
                96
            ],
            "on_ProjectInvitation": [
                155
            ],
            "on_Node": [
                113
            ],
            "__typename": [
                263
            ]
        },
        "PublicStats": {
            "totalDeploymentsLastMonth": [
                89
            ],
            "totalLogsLastMonth": [
                9
            ],
            "totalProjects": [
                89
            ],
            "totalRequestsLastMonth": [
                9
            ],
            "totalServices": [
                89
            ],
            "totalUsers": [
                89
            ],
            "__typename": [
                263
            ]
        },
        "Query": {
            "adminVolumeInstancesForVolume": [
                350,
                {
                    "volumeId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "apiTokens": [
                188,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "buildLogs": [
                100,
                {
                    "deploymentId": [
                        263,
                        "String!"
                    ],
                    "endDate": [
                        35
                    ],
                    "filter": [
                        263
                    ],
                    "limit": [
                        89
                    ],
                    "startDate": [
                        35
                    ]
                }
            ],
            "changelogBlockImage": [
                263,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "creditTransferMetrics": [
                21
            ],
            "customDomain": [
                23,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "projectId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "customDomainAvailable": [
                50,
                {
                    "domain": [
                        263,
                        "String!"
                    ]
                }
            ],
            "deployment": [
                36,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "deploymentEvents": [
                190,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "id": [
                        263,
                        "String!"
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "deploymentLogs": [
                100,
                {
                    "deploymentId": [
                        263,
                        "String!"
                    ],
                    "endDate": [
                        35
                    ],
                    "filter": [
                        263
                    ],
                    "limit": [
                        89
                    ],
                    "startDate": [
                        35
                    ]
                }
            ],
            "deploymentSnapshot": [
                42,
                {
                    "deploymentId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggers": [
                192,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "environmentId": [
                        263,
                        "String!"
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ],
                    "projectId": [
                        263,
                        "String!"
                    ],
                    "serviceId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "deployments": [
                194,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "input": [
                        40,
                        "DeploymentListInput!"
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "domainStatus": [
                51,
                {
                    "id": [
                        263,
                        "String!"
                    ],
                    "projectId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "domains": [
                4,
                {
                    "environmentId": [
                        263,
                        "String!"
                    ],
                    "projectId": [
                        263,
                        "String!"
                    ],
                    "serviceId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "egressGateways": [
                52,
                {
                    "environmentId": [
                        263,
                        "String!"
                    ],
                    "serviceId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "environment": [
                55,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "environmentPatches": [
                196,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "environmentId": [
                        263,
                        "String!"
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "environments": [
                198,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "isEphemeral": [
                        11
                    ],
                    "last": [
                        89
                    ],
                    "projectId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "estimatedUsage": [
                70,
                {
                    "includeDeleted": [
                        11
                    ],
                    "measurements": [
                        107,
                        "[MetricMeasurement!]!"
                    ],
                    "projectId": [
                        263
                    ],
                    "teamId": [
                        263
                    ],
                    "userId": [
                        263
                    ]
                }
            ],
            "events": [
                200,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "environmentId": [
                        263
                    ],
                    "filter": [
                        73
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ],
                    "projectId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "githubIsRepoNameAvailable": [
                11,
                {
                    "fullRepoName": [
                        263,
                        "String!"
                    ]
                }
            ],
            "githubRepoBranches": [
                80,
                {
                    "owner": [
                        263,
                        "String!"
                    ],
                    "repo": [
                        263,
                        "String!"
                    ]
                }
            ],
            "githubRepos": [
                81
            ],
            "githubWritableScopes": [
                263
            ],
            "herokuApps": [
                84
            ],
            "integrationAuth": [
                91,
                {
                    "provider": [
                        263,
                        "String!"
                    ],
                    "providerId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "integrationAuths": [
                202,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "integrations": [
                204,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ],
                    "projectId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "inviteCode": [
                96,
                {
                    "code": [
                        263,
                        "String!"
                    ]
                }
            ],
            "me": [
                323
            ],
            "metrics": [
                110,
                {
                    "averagingWindowSeconds": [
                        89
                    ],
                    "endDate": [
                        35
                    ],
                    "environmentId": [
                        263
                    ],
                    "groupBy": [
                        108,
                        "[MetricTag!]"
                    ],
                    "includeDeleted": [
                        11
                    ],
                    "measurements": [
                        107,
                        "[MetricMeasurement!]!"
                    ],
                    "pluginId": [
                        263
                    ],
                    "projectId": [
                        263
                    ],
                    "sampleRateSeconds": [
                        89
                    ],
                    "serviceId": [
                        263
                    ],
                    "startDate": [
                        35,
                        "DateTime!"
                    ],
                    "teamId": [
                        263
                    ],
                    "userId": [
                        263
                    ],
                    "volumeId": [
                        263
                    ]
                }
            ],
            "node": [
                113,
                {
                    "id": [
                        86,
                        "ID!"
                    ]
                }
            ],
            "nodes": [
                113,
                {
                    "ids": [
                        86,
                        "[ID!]!"
                    ]
                }
            ],
            "observabilityDashboards": [
                206,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "environmentId": [
                        263,
                        "String!"
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "plainCustomerIdForDiscordId": [
                263,
                {
                    "discordId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "plainJWTForDiscordId": [
                263,
                {
                    "discordId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "platformStatus": [
                127
            ],
            "plugin": [
                128,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "pluginLogs": [
                100,
                {
                    "endDate": [
                        35
                    ],
                    "environmentId": [
                        263,
                        "String!"
                    ],
                    "filter": [
                        263
                    ],
                    "limit": [
                        89
                    ],
                    "pluginId": [
                        263,
                        "String!"
                    ],
                    "startDate": [
                        35
                    ]
                }
            ],
            "preferences": [
                138,
                {
                    "token": [
                        263
                    ]
                }
            ],
            "privateNetworkEndpoint": [
                142,
                {
                    "environmentId": [
                        263,
                        "String!"
                    ],
                    "privateNetworkId": [
                        263,
                        "String!"
                    ],
                    "serviceId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "privateNetworkEndpointNameAvailable": [
                11,
                {
                    "environmentId": [
                        263,
                        "String!"
                    ],
                    "prefix": [
                        263,
                        "String!"
                    ],
                    "privateNetworkId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "privateNetworks": [
                140,
                {
                    "environmentId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "project": [
                144,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "projectInvitation": [
                185,
                {
                    "code": [
                        263,
                        "String!"
                    ]
                }
            ],
            "projectInvitations": [
                155,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "projectInviteCode": [
                96,
                {
                    "projectId": [
                        263,
                        "String!"
                    ],
                    "role": [
                        168,
                        "ProjectRole!"
                    ]
                }
            ],
            "projectMembers": [
                159,
                {
                    "projectId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "projectResourceAccess": [
                167,
                {
                    "projectId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "projectToken": [
                171
            ],
            "projectTokens": [
                208,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ],
                    "projectId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "projects": [
                210,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "includeDeleted": [
                        11
                    ],
                    "last": [
                        89
                    ],
                    "teamId": [
                        263
                    ],
                    "userId": [
                        263
                    ]
                }
            ],
            "publicStats": [
                186
            ],
            "referralInfo": [
                224
            ],
            "regions": [
                231
            ],
            "resourceAccess": [
                236,
                {
                    "explicitResourceOwner": [
                        77
                    ]
                }
            ],
            "service": [
                241,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "serviceDomainAvailable": [
                50,
                {
                    "domain": [
                        263,
                        "String!"
                    ]
                }
            ],
            "serviceInstance": [
                249,
                {
                    "environmentId": [
                        263,
                        "String!"
                    ],
                    "serviceId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceIsUpdatable": [
                11,
                {
                    "environmentId": [
                        263,
                        "String!"
                    ],
                    "serviceId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "sessions": [
                212,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "tcpProxies": [
                270,
                {
                    "environmentId": [
                        263,
                        "String!"
                    ],
                    "serviceId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "team": [
                272,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "teamByCode": [
                272,
                {
                    "code": [
                        263,
                        "String!"
                    ]
                }
            ],
            "teamDirectSupportDiscordInfoForDiscordId": [
                277,
                {
                    "discordId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "teamTemplates": [
                214,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ],
                    "teamId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "template": [
                289,
                {
                    "code": [
                        263
                    ],
                    "owner": [
                        263
                    ],
                    "repo": [
                        263
                    ]
                }
            ],
            "templateFromHerokuTemplate": [
                97,
                {
                    "repoUrl": [
                        263,
                        "String!"
                    ]
                }
            ],
            "templateKickbacksLeaderboard": [
                299
            ],
            "templateSourceForProject": [
                289,
                {
                    "projectId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "templatekickbacksTotal": [
                79
            ],
            "templates": [
                216,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ],
                    "recommended": [
                        11
                    ]
                }
            ],
            "twoFactorInfo": [
                312
            ],
            "usage": [
                3,
                {
                    "endDate": [
                        35
                    ],
                    "groupBy": [
                        108,
                        "[MetricTag!]"
                    ],
                    "includeDeleted": [
                        11
                    ],
                    "measurements": [
                        107,
                        "[MetricMeasurement!]!"
                    ],
                    "projectId": [
                        263
                    ],
                    "startDate": [
                        35
                    ],
                    "teamId": [
                        263
                    ],
                    "userId": [
                        263
                    ]
                }
            ],
            "userIdForDiscordId": [
                263,
                {
                    "discordId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "userKickbackEarnings": [
                328,
                {
                    "userId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "userProfile": [
                330,
                {
                    "username": [
                        263,
                        "String!"
                    ]
                }
            ],
            "userTemplates": [
                218,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "variables": [
                258,
                {
                    "environmentId": [
                        263,
                        "String!"
                    ],
                    "pluginId": [
                        263
                    ],
                    "projectId": [
                        263,
                        "String!"
                    ],
                    "serviceId": [
                        263
                    ],
                    "unrendered": [
                        11
                    ]
                }
            ],
            "variablesForServiceDeployment": [
                258,
                {
                    "environmentId": [
                        263,
                        "String!"
                    ],
                    "projectId": [
                        263,
                        "String!"
                    ],
                    "serviceId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "vercelInfo": [
                346
            ],
            "volumeInstance": [
                350,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "webhooks": [
                220,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ],
                    "projectId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "workflowStatus": [
                362,
                {
                    "workflowId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                263
            ]
        },
        "QueryApiTokensConnection": {
            "edges": [
                189
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "QueryApiTokensConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                5
            ],
            "__typename": [
                263
            ]
        },
        "QueryDeploymentEventsConnection": {
            "edges": [
                191
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "QueryDeploymentEventsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                37
            ],
            "__typename": [
                263
            ]
        },
        "QueryDeploymentTriggersConnection": {
            "edges": [
                193
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "QueryDeploymentTriggersConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                45
            ],
            "__typename": [
                263
            ]
        },
        "QueryDeploymentsConnection": {
            "edges": [
                195
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "QueryDeploymentsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                36
            ],
            "__typename": [
                263
            ]
        },
        "QueryEnvironmentPatchesConnection": {
            "edges": [
                197
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "QueryEnvironmentPatchesConnectionEdge": {
            "cursor": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "QueryEnvironmentsConnection": {
            "edges": [
                199
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "QueryEnvironmentsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                55
            ],
            "__typename": [
                263
            ]
        },
        "QueryEventsConnection": {
            "edges": [
                201
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "QueryEventsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                71
            ],
            "__typename": [
                263
            ]
        },
        "QueryIntegrationAuthsConnection": {
            "edges": [
                203
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "QueryIntegrationAuthsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                91
            ],
            "__typename": [
                263
            ]
        },
        "QueryIntegrationsConnection": {
            "edges": [
                205
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "QueryIntegrationsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                90
            ],
            "__typename": [
                263
            ]
        },
        "QueryObservabilityDashboardsConnection": {
            "edges": [
                207
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "QueryObservabilityDashboardsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                114
            ],
            "__typename": [
                263
            ]
        },
        "QueryProjectTokensConnection": {
            "edges": [
                209
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "QueryProjectTokensConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                171
            ],
            "__typename": [
                263
            ]
        },
        "QueryProjectsConnection": {
            "edges": [
                211
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "QueryProjectsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                144
            ],
            "__typename": [
                263
            ]
        },
        "QuerySessionsConnection": {
            "edges": [
                213
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "QuerySessionsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                259
            ],
            "__typename": [
                263
            ]
        },
        "QueryTeamTemplatesConnection": {
            "edges": [
                215
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "QueryTeamTemplatesConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                289
            ],
            "__typename": [
                263
            ]
        },
        "QueryTemplatesConnection": {
            "edges": [
                217
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "QueryTemplatesConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                289
            ],
            "__typename": [
                263
            ]
        },
        "QueryUserTemplatesConnection": {
            "edges": [
                219
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "QueryUserTemplatesConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                289
            ],
            "__typename": [
                263
            ]
        },
        "QueryWebhooksConnection": {
            "edges": [
                221
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "QueryWebhooksConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                180
            ],
            "__typename": [
                263
            ]
        },
        "RecoveryCodeValidateInput": {
            "code": [
                263
            ],
            "twoFactorLinkingKey": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "RecoveryCodes": {
            "recoveryCodes": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ReferralInfo": {
            "code": [
                263
            ],
            "id": [
                86
            ],
            "referralStats": [
                226
            ],
            "status": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ReferralInfoUpdateInput": {
            "code": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ReferralStats": {
            "credited": [
                89
            ],
            "pending": [
                89
            ],
            "__typename": [
                263
            ]
        },
        "ReferralStatus": {},
        "ReferralUser": {
            "code": [
                263
            ],
            "id": [
                263
            ],
            "status": [
                227
            ],
            "__typename": [
                263
            ]
        },
        "RefundRequest": {
            "amount": [
                89
            ],
            "decision": [
                230
            ],
            "id": [
                86
            ],
            "invoiceId": [
                263
            ],
            "plainThreadId": [
                263
            ],
            "reason": [
                263
            ],
            "teamId": [
                263
            ],
            "userId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "RefundRequestDecisionEnum": {},
        "Region": {
            "name": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "RegistrationStatus": {},
        "RegistryCredentialsInput": {
            "password": [
                263
            ],
            "username": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ResetPluginCredentialsInput": {
            "environmentId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ResetPluginInput": {
            "environmentId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ResourceAccess": {
            "project": [
                0
            ],
            "__typename": [
                263
            ]
        },
        "ResourceOwnerType": {},
        "RestartPolicyType": {},
        "SendCommunityThreadNotificationEmailInput": {
            "threadTitle": [
                263
            ],
            "threadUrl": [
                263
            ],
            "userIds": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "SerializedTemplateConfig": {},
        "Service": {
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "deployments": [
                244,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "icon": [
                263
            ],
            "id": [
                86
            ],
            "name": [
                263
            ],
            "project": [
                144
            ],
            "projectId": [
                263
            ],
            "repoTriggers": [
                251,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "serviceInstances": [
                253,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "templateThreadSlug": [
                263
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                263
            ]
        },
        "ServiceConnectInput": {
            "branch": [
                263
            ],
            "image": [
                263
            ],
            "repo": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ServiceCreateInput": {
            "branch": [
                263
            ],
            "environmentId": [
                263
            ],
            "name": [
                263
            ],
            "projectId": [
                263
            ],
            "source": [
                256
            ],
            "variables": [
                258
            ],
            "__typename": [
                263
            ]
        },
        "ServiceDeploymentsConnection": {
            "edges": [
                245
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "ServiceDeploymentsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                36
            ],
            "__typename": [
                263
            ]
        },
        "ServiceDomain": {
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "domain": [
                263
            ],
            "environmentId": [
                263
            ],
            "id": [
                86
            ],
            "projectId": [
                263
            ],
            "serviceId": [
                263
            ],
            "suffix": [
                263
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                263
            ]
        },
        "ServiceDomainCreateInput": {
            "environmentId": [
                263
            ],
            "serviceId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ServiceDomainUpdateInput": {
            "domain": [
                263
            ],
            "environmentId": [
                263
            ],
            "serviceId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ServiceInstance": {
            "buildCommand": [
                263
            ],
            "builder": [
                12
            ],
            "createdAt": [
                35
            ],
            "cronSchedule": [
                263
            ],
            "deletedAt": [
                35
            ],
            "domains": [
                4
            ],
            "environmentId": [
                263
            ],
            "healthcheckPath": [
                263
            ],
            "healthcheckTimeout": [
                89
            ],
            "id": [
                86
            ],
            "isUpdatable": [
                11
            ],
            "latestDeployment": [
                36
            ],
            "nextCronRunAt": [
                35
            ],
            "nixpacksPlan": [
                97
            ],
            "numReplicas": [
                89
            ],
            "railwayConfigFile": [
                263
            ],
            "region": [
                263
            ],
            "restartPolicyMaxRetries": [
                89
            ],
            "restartPolicyType": [
                238
            ],
            "rootDirectory": [
                263
            ],
            "serviceId": [
                263
            ],
            "sleepApplication": [
                11
            ],
            "source": [
                255
            ],
            "startCommand": [
                263
            ],
            "updatedAt": [
                35
            ],
            "upstreamUrl": [
                263
            ],
            "watchPatterns": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ServiceInstanceUpdateInput": {
            "buildCommand": [
                263
            ],
            "builder": [
                12
            ],
            "cronSchedule": [
                263
            ],
            "healthcheckPath": [
                263
            ],
            "healthcheckTimeout": [
                89
            ],
            "nixpacksPlan": [
                97
            ],
            "numReplicas": [
                89
            ],
            "railwayConfigFile": [
                263
            ],
            "region": [
                263
            ],
            "registryCredentials": [
                233
            ],
            "restartPolicyMaxRetries": [
                89
            ],
            "restartPolicyType": [
                238
            ],
            "rootDirectory": [
                263
            ],
            "source": [
                256
            ],
            "startCommand": [
                263
            ],
            "watchPatterns": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ServiceRepoTriggersConnection": {
            "edges": [
                252
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "ServiceRepoTriggersConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                45
            ],
            "__typename": [
                263
            ]
        },
        "ServiceServiceInstancesConnection": {
            "edges": [
                254
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "ServiceServiceInstancesConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                249
            ],
            "__typename": [
                263
            ]
        },
        "ServiceSource": {
            "image": [
                263
            ],
            "repo": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ServiceSourceInput": {
            "image": [
                263
            ],
            "repo": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ServiceUpdateInput": {
            "icon": [
                263
            ],
            "name": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "ServiceVariables": {},
        "Session": {
            "createdAt": [
                35
            ],
            "expiredAt": [
                35
            ],
            "id": [
                86
            ],
            "isCurrent": [
                11
            ],
            "name": [
                263
            ],
            "type": [
                260
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                263
            ]
        },
        "SessionType": {},
        "SharedVariableConfigureInput": {
            "disabledServiceIds": [
                263
            ],
            "enabledServiceIds": [
                263
            ],
            "environmentId": [
                263
            ],
            "name": [
                263
            ],
            "projectId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "SimilarTemplate": {
            "code": [
                263
            ],
            "createdAt": [
                35
            ],
            "creator": [
                293
            ],
            "deploys": [
                89
            ],
            "description": [
                263
            ],
            "health": [
                79
            ],
            "image": [
                263
            ],
            "name": [
                263
            ],
            "teamId": [
                263
            ],
            "userId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "String": {},
        "Subscription": {
            "buildLogs": [
                100,
                {
                    "deploymentId": [
                        263,
                        "String!"
                    ],
                    "filter": [
                        263
                    ],
                    "limit": [
                        89
                    ]
                }
            ],
            "deploymentEvents": [
                37,
                {
                    "id": [
                        263,
                        "String!"
                    ]
                }
            ],
            "deploymentLogs": [
                100,
                {
                    "deploymentId": [
                        263,
                        "String!"
                    ],
                    "filter": [
                        263
                    ],
                    "limit": [
                        89
                    ]
                }
            ],
            "pluginLogs": [
                100,
                {
                    "environmentId": [
                        263,
                        "String!"
                    ],
                    "filter": [
                        263
                    ],
                    "limit": [
                        89
                    ],
                    "pluginId": [
                        263,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                263
            ]
        },
        "SubscriptionDiscount": {
            "couponId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "SubscriptionItem": {
            "itemId": [
                263
            ],
            "priceId": [
                263
            ],
            "productId": [
                263
            ],
            "quantity": [
                9
            ],
            "__typename": [
                263
            ]
        },
        "SubscriptionPlanLimit": {},
        "SubscriptionPlanType": {},
        "SubscriptionState": {},
        "TCPProxy": {
            "applicationPort": [
                89
            ],
            "createdAt": [
                35
            ],
            "deletedAt": [
                35
            ],
            "domain": [
                263
            ],
            "environmentId": [
                263
            ],
            "id": [
                86
            ],
            "proxyPort": [
                89
            ],
            "serviceId": [
                263
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                263
            ]
        },
        "TCPProxyCreateInput": {
            "applicationPort": [
                89
            ],
            "environmentId": [
                263
            ],
            "serviceId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "Team": {
            "adoptionHistory": [
                2
            ],
            "adoptionLevel": [
                79
            ],
            "avatar": [
                263
            ],
            "banReason": [
                263
            ],
            "createdAt": [
                35
            ],
            "customer": [
                26
            ],
            "discordRole": [
                263
            ],
            "id": [
                86
            ],
            "isEligibleForDirectSupport": [
                11
            ],
            "members": [
                279
            ],
            "name": [
                263
            ],
            "projects": [
                282,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "slackChannelId": [
                263
            ],
            "teamPermissions": [
                280
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                263
            ]
        },
        "TeamBulkProjectTransferInput": {
            "projectIds": [
                263
            ],
            "teamId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TeamCreateAndSubscribeInput": {
            "avatar": [
                263
            ],
            "name": [
                263
            ],
            "paymentMethodId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TeamCreateAndSubscribeResponse": {
            "customerId": [
                263
            ],
            "paymentIntent": [
                97
            ],
            "teamId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TeamCreateInput": {
            "avatar": [
                263
            ],
            "name": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TeamDirectSupportDiscordInfo": {
            "memberDiscordIds": [
                263
            ],
            "teamId": [
                263
            ],
            "teamName": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TeamInviteCodeCreateInput": {
            "role": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TeamMember": {
            "avatar": [
                263
            ],
            "email": [
                263
            ],
            "id": [
                263
            ],
            "name": [
                263
            ],
            "role": [
                284
            ],
            "__typename": [
                263
            ]
        },
        "TeamPermission": {
            "createdAt": [
                35
            ],
            "id": [
                86
            ],
            "role": [
                284
            ],
            "teamId": [
                263
            ],
            "updatedAt": [
                35
            ],
            "userId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TeamPermissionChangeInput": {
            "role": [
                284
            ],
            "teamId": [
                263
            ],
            "userId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TeamProjectsConnection": {
            "edges": [
                283
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "TeamProjectsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                144
            ],
            "__typename": [
                263
            ]
        },
        "TeamRole": {},
        "TeamUpdateInput": {
            "avatar": [
                263
            ],
            "name": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TeamUserInviteInput": {
            "code": [
                263
            ],
            "email": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TeamUserRemoveInput": {
            "userId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TelemetrySendInput": {
            "command": [
                263
            ],
            "environmentId": [
                263
            ],
            "error": [
                263
            ],
            "projectId": [
                263
            ],
            "stacktrace": [
                263
            ],
            "version": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "Template": {
            "activeProjects": [
                89
            ],
            "canvasConfig": [
                14
            ],
            "code": [
                263
            ],
            "communityThreadSlug": [
                263
            ],
            "config": [
                291
            ],
            "createdAt": [
                35
            ],
            "creator": [
                293
            ],
            "demoProjectId": [
                263
            ],
            "health": [
                79
            ],
            "id": [
                86
            ],
            "isApproved": [
                11
            ],
            "isV2Template": [
                11
            ],
            "metadata": [
                300
            ],
            "projects": [
                89
            ],
            "serializedConfig": [
                240
            ],
            "services": [
                307,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "similarTemplates": [
                262
            ],
            "status": [
                309
            ],
            "teamId": [
                263
            ],
            "totalPayout": [
                79
            ],
            "userId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TemplateCloneInput": {
            "code": [
                263
            ],
            "teamId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TemplateConfig": {},
        "TemplateCreateInput": {
            "canvasConfig": [
                14
            ],
            "config": [
                291
            ],
            "demoProjectId": [
                263
            ],
            "metadata": [
                300
            ],
            "services": [
                304
            ],
            "teamId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TemplateCreator": {
            "avatar": [
                263
            ],
            "hasPublicProfile": [
                11
            ],
            "name": [
                263
            ],
            "username": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TemplateDeleteInput": {
            "teamId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TemplateDeployInput": {
            "environmentId": [
                263
            ],
            "projectId": [
                263
            ],
            "services": [
                297
            ],
            "teamId": [
                263
            ],
            "templateCode": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TemplateDeployPayload": {
            "projectId": [
                263
            ],
            "workflowId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TemplateDeployService": {
            "commit": [
                263
            ],
            "hasDomain": [
                11
            ],
            "healthcheckPath": [
                263
            ],
            "id": [
                263
            ],
            "isPrivate": [
                11
            ],
            "name": [
                263
            ],
            "owner": [
                263
            ],
            "rootDirectory": [
                263
            ],
            "serviceIcon": [
                263
            ],
            "serviceName": [
                263
            ],
            "startCommand": [
                263
            ],
            "tcpProxyApplicationPort": [
                89
            ],
            "template": [
                263
            ],
            "variables": [
                258
            ],
            "volumes": [
                311
            ],
            "__typename": [
                263
            ]
        },
        "TemplateGenerateInput": {
            "projectId": [
                263
            ],
            "teamId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TemplateKickbacksLeaderboard": {
            "total_amount": [
                79
            ],
            "userId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TemplateMetadata": {},
        "TemplatePublishInput": {
            "category": [
                263
            ],
            "description": [
                263
            ],
            "image": [
                263
            ],
            "readme": [
                263
            ],
            "teamId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TemplateService": {
            "config": [
                303
            ],
            "createdAt": [
                35
            ],
            "id": [
                86
            ],
            "templateId": [
                263
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                263
            ]
        },
        "TemplateServiceConfig": {},
        "TemplateServiceCreateInput": {
            "config": [
                303
            ],
            "__typename": [
                263
            ]
        },
        "TemplateServiceSourceEjectInput": {
            "projectId": [
                263
            ],
            "repoName": [
                263
            ],
            "repoOwner": [
                263
            ],
            "serviceIds": [
                263
            ],
            "upstreamUrl": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TemplateServiceUpdateInput": {
            "config": [
                303
            ],
            "id": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TemplateServicesConnection": {
            "edges": [
                308
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "TemplateServicesConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                302
            ],
            "__typename": [
                263
            ]
        },
        "TemplateStatus": {},
        "TemplateUpdateInput": {
            "canvasConfig": [
                14
            ],
            "config": [
                291
            ],
            "demoProjectId": [
                263
            ],
            "forceUpdate": [
                11
            ],
            "metadata": [
                300
            ],
            "services": [
                306
            ],
            "teamId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TemplateVolume": {},
        "TwoFactorInfo": {
            "hasRecoveryCodes": [
                11
            ],
            "isVerified": [
                11
            ],
            "__typename": [
                263
            ]
        },
        "TwoFactorInfoCreateInput": {
            "token": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TwoFactorInfoSecret": {
            "secret": [
                263
            ],
            "uri": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "TwoFactorInfoValidateInput": {
            "token": [
                263
            ],
            "twoFactorLinkingKey": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "Upload": {},
        "UsageAnomaly": {
            "actedOn": [
                35
            ],
            "action": [
                318
            ],
            "actorId": [
                263
            ],
            "flaggedAt": [
                35
            ],
            "flaggedFor": [
                319
            ],
            "id": [
                86
            ],
            "__typename": [
                263
            ]
        },
        "UsageAnomalyAction": {},
        "UsageAnomalyFlagReason": {},
        "UsageLimit": {
            "customerId": [
                263
            ],
            "hardLimit": [
                89
            ],
            "id": [
                86
            ],
            "softLimit": [
                89
            ],
            "__typename": [
                263
            ]
        },
        "UsageLimitRemoveInput": {
            "customerId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "UsageLimitSetInput": {
            "customerId": [
                263
            ],
            "hardLimitDollars": [
                89
            ],
            "softLimitDollars": [
                89
            ],
            "__typename": [
                263
            ]
        },
        "User": {
            "agreedFairUse": [
                11
            ],
            "avatar": [
                263
            ],
            "banReason": [
                263
            ],
            "cost": [
                324
            ],
            "createdAt": [
                35
            ],
            "customer": [
                26
            ],
            "email": [
                263
            ],
            "featureFlags": [
                1
            ],
            "flags": [
                325
            ],
            "has2FA": [
                11
            ],
            "id": [
                86
            ],
            "isAdmin": [
                11
            ],
            "isConductor": [
                11
            ],
            "isDevPlan": [
                11
            ],
            "isEligibleForFreeHobbyPlan": [
                11
            ],
            "isOnHobbyPlan": [
                11
            ],
            "isVerified": [
                11
            ],
            "lastLogin": [
                35
            ],
            "name": [
                263
            ],
            "profile": [
                329
            ],
            "projects": [
                334,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "providerAuths": [
                336,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "referredUsers": [
                228
            ],
            "registrationStatus": [
                232
            ],
            "riskLevel": [
                79
            ],
            "teams": [
                338,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "termsAgreedOn": [
                35
            ],
            "username": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "UserCost": {
            "current": [
                79
            ],
            "estimated": [
                79
            ],
            "__typename": [
                263
            ]
        },
        "UserFlag": {},
        "UserFlagsRemoveInput": {
            "flags": [
                325
            ],
            "userId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "UserFlagsSetInput": {
            "flags": [
                325
            ],
            "userId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "UserKickbackEarnings": {
            "total_amount": [
                79
            ],
            "__typename": [
                263
            ]
        },
        "UserProfile": {
            "bio": [
                263
            ],
            "isPublic": [
                11
            ],
            "website": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "UserProfileResponse": {
            "avatar": [
                263
            ],
            "createdAt": [
                35
            ],
            "customerId": [
                263
            ],
            "id": [
                263
            ],
            "isTrialing": [
                11
            ],
            "name": [
                263
            ],
            "profile": [
                329
            ],
            "publicProjects": [
                331,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "publishedTemplates": [
                262
            ],
            "state": [
                263
            ],
            "totalDeploys": [
                89
            ],
            "username": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "UserProfileResponsePublicProjectsConnection": {
            "edges": [
                332
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "UserProfileResponsePublicProjectsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                144
            ],
            "__typename": [
                263
            ]
        },
        "UserProfileUpdateInput": {
            "bio": [
                263
            ],
            "isPublic": [
                11
            ],
            "website": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "UserProjectsConnection": {
            "edges": [
                335
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "UserProjectsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                144
            ],
            "__typename": [
                263
            ]
        },
        "UserProviderAuthsConnection": {
            "edges": [
                337
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "UserProviderAuthsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                183
            ],
            "__typename": [
                263
            ]
        },
        "UserTeamsConnection": {
            "edges": [
                339
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "UserTeamsConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                272
            ],
            "__typename": [
                263
            ]
        },
        "UserUpdateInput": {
            "avatar": [
                263
            ],
            "name": [
                263
            ],
            "username": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "Variable": {
            "createdAt": [
                35
            ],
            "environment": [
                55
            ],
            "environmentId": [
                263
            ],
            "id": [
                86
            ],
            "name": [
                263
            ],
            "plugin": [
                128
            ],
            "pluginId": [
                263
            ],
            "references": [
                263
            ],
            "service": [
                241
            ],
            "serviceId": [
                263
            ],
            "updatedAt": [
                35
            ],
            "__typename": [
                263
            ]
        },
        "VariableCollectionUpsertInput": {
            "environmentId": [
                263
            ],
            "projectId": [
                263
            ],
            "replace": [
                11
            ],
            "serviceId": [
                263
            ],
            "variables": [
                258
            ],
            "__typename": [
                263
            ]
        },
        "VariableDeleteInput": {
            "environmentId": [
                263
            ],
            "name": [
                263
            ],
            "projectId": [
                263
            ],
            "serviceId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "VariableUpsertInput": {
            "environmentId": [
                263
            ],
            "name": [
                263
            ],
            "projectId": [
                263
            ],
            "serviceId": [
                263
            ],
            "value": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "VercelAccount": {
            "id": [
                263
            ],
            "integrationAuthId": [
                263
            ],
            "isUser": [
                11
            ],
            "name": [
                263
            ],
            "projects": [
                347
            ],
            "slug": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "VercelInfo": {
            "accounts": [
                345
            ],
            "__typename": [
                263
            ]
        },
        "VercelProject": {
            "accountId": [
                263
            ],
            "id": [
                263
            ],
            "name": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "Volume": {
            "createdAt": [
                35
            ],
            "id": [
                86
            ],
            "name": [
                263
            ],
            "project": [
                144
            ],
            "projectId": [
                263
            ],
            "volumeInstances": [
                354,
                {
                    "after": [
                        263
                    ],
                    "before": [
                        263
                    ],
                    "first": [
                        89
                    ],
                    "last": [
                        89
                    ]
                }
            ],
            "__typename": [
                263
            ]
        },
        "VolumeCreateInput": {
            "environmentId": [
                263
            ],
            "mountPath": [
                263
            ],
            "projectId": [
                263
            ],
            "serviceId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "VolumeInstance": {
            "createdAt": [
                35
            ],
            "currentSizeMB": [
                79
            ],
            "environment": [
                55
            ],
            "environmentId": [
                263
            ],
            "externalId": [
                263
            ],
            "id": [
                86
            ],
            "mountPath": [
                263
            ],
            "region": [
                263
            ],
            "service": [
                241
            ],
            "serviceId": [
                263
            ],
            "sizeMB": [
                89
            ],
            "state": [
                352
            ],
            "volume": [
                348
            ],
            "volumeId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "VolumeInstanceUpdateInput": {
            "mountPath": [
                263
            ],
            "serviceId": [
                263
            ],
            "state": [
                352
            ],
            "__typename": [
                263
            ]
        },
        "VolumeState": {},
        "VolumeUpdateInput": {
            "name": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "VolumeVolumeInstancesConnection": {
            "edges": [
                355
            ],
            "pageInfo": [
                123
            ],
            "__typename": [
                263
            ]
        },
        "VolumeVolumeInstancesConnectionEdge": {
            "cursor": [
                263
            ],
            "node": [
                350
            ],
            "__typename": [
                263
            ]
        },
        "WebhookCreateInput": {
            "projectId": [
                263
            ],
            "url": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "WebhookUpdateInput": {
            "url": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "Withdrawal": {
            "amount": [
                79
            ],
            "createdAt": [
                35
            ],
            "customerId": [
                263
            ],
            "id": [
                86
            ],
            "status": [
                361
            ],
            "updatedAt": [
                35
            ],
            "withdrawalAccountId": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "WithdrawalAccount": {
            "customerId": [
                263
            ],
            "id": [
                86
            ],
            "platform": [
                360
            ],
            "platformDetails": [
                263
            ],
            "__typename": [
                263
            ]
        },
        "WithdrawalPlatformTypes": {},
        "WithdrawalStatusType": {},
        "WorkflowResult": {
            "error": [
                263
            ],
            "status": [
                363
            ],
            "__typename": [
                263
            ]
        },
        "WorkflowStatus": {},
        "customerTogglePayoutsToCreditsInput": {
            "isWithdrawingToCredits": [
                11
            ],
            "__typename": [
                263
            ]
        }
    }
}