# Requirements
This repository uses yarn so please install it globally

```npm install -g yarn```

# Install

````
> yarn install
````

NB: if you have an error referring to cpu-features please ignore it.

# Develop

````
> turbo develop
````

# Tests

To launch all unit test
````
> turbo test
````

# Description

An offer is a string provided by the provider-api following this pattern: {newspaper_id}_{offer_type}-{offer_duration},
the newspaper id, the offer type and the offer duration being strings containing only uppercase letters 
(no numbers, no punctuation).

Each of the 3 list are used by several front end applications. We need to be very careful when modifying the code base.

# Goal of the exercise

## Step 1
Today, the `/newspaper/offers` endpoint contains the logic to compute the three lists of distinct values. 
This legacy code is not easy to read and to update. First we need you to refactor this part and make it more readable 
without breaking the functionality.

## Step 2 

We would like to be able to reuse this logic in 3 new endpoints in the `newspaper-api` which are:

```
- /newspapers/names             // return only an array of all newspaper names 
- /newspapers/offers/types      // return only an array of all offer types 
- /newspapers/offers/durations  // return only an array of all offer durations 
```

## Step 3 
Our product owner would like to extract those data in a csv file and put it on a S3 bucket where he can consult it on demand (We assume he has access to the aws console).
Make sure you generate this csv file every day at 6AM.

Do the architecture of this new microservice. You can use [serverless-s3-local plugin](https://www.serverless.com/plugins/serverless-s3-local) to emulate a S3 bucket locally.

# Rules
There are some rules to follow:

You must commit regularly with an explicit message each time
You must not modify code when comments explicitly forbid it

# Deliverables
What do we expect from you:

- Fork this repository and make a merge request to provide us your code.
- Several commits, with an explicit message each time
- A file / message / email explaining your process and principles you've followed, and how one developer would go about reusing the feature

